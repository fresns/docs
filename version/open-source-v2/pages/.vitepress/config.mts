import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',

    title: 'Fresns Open Source',
    description: 'Fresns is a free and open source social network service software, a general-purpose community product designed for cross-platform, and supports flexible and diverse content forms. It conforms to the trend of the times, satisfies a variety of operating scenarios, is more open and easier to re-development.',

    lastUpdated: true,

    sitemap: {
        hostname: 'https://v2.fresns.org',
    },

    head: [
        ['link', { rel: 'icon', type: 'image/png', href: 'https://assets.fresns.com/images/icons/fresns.png' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: 'Fresns' }],
        ['meta', { property: 'og:description', content: 'Cross-platform general-purpose multiple content forms social network service software' }],
        ['meta', { property: 'og:url', content: 'https://v2.fresns.org' }],
        ['meta', { property: 'og:image', content: 'https://assets.fresns.com/images/wikis/open-graph/open-source.jpg' }],
    ],

    cleanUrls: false,

    themeConfig:{
        logo: 'https://assets.fresns.com/images/icons/fresns.png',
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
            title: 'Fresns 开源版',
            description: 'Fresns 是一款免费开源的社交网络服务软件，专为跨平台而打造的通用型社区产品，支持灵活多样的内容形态，可以满足多种运营场景，符合时代潮流，更开放且更易于二次开发。',

            head: [
                ['link', { rel: 'icon', type: 'image/png', href: 'https://assets.fresns.com/images/icons/fresns.png' }],
                ['meta', { property: 'og:type', content: 'website' }],
                ['meta', { property: 'og:title', content: 'Fresns' }],
                ['meta', { property: 'og:description', content: '一款免费开源的社交网络服务软件' }],
                ['meta', { property: 'og:url', content: 'https://v2.fresns.org/zh-Hans/' }],
                ['meta', { property: 'og:image', content: 'https://assets.fresns.com/images/wikis/open-graph/open-source-zh-hans.jpg' }],
            ],

            themeConfig: {
                nav: navbarForZh(),

                sidebar: {
                    '/zh-Hans/guide/': sidebarGuideForZh(),
                    '/zh-Hans/extensions/': sidebarExtensionsForZh(),
                    '/zh-Hans/api/': sidebarApiForZh(),
                    '/zh-Hans/database/': sidebarDatabaseForZh(),
                    '/zh-Hans/supports/': sidebarSupportsForZh(),
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
        { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
        { text: 'Extensions', link: '/extensions/', activeMatch: '/extensions/' },
        { text: 'API', link: '/api/', activeMatch: '/api/' },
        { text: 'Database', link: '/database/', activeMatch: '/database/' },
        {
            text: 'Supports',
            items: [
                { text: 'Command Word', link: '/supports/cmd-word/basic.md' },
                { text: 'Helpers', link: '/supports/helpers/config.md' },
                { text: 'Utilities', link: '/supports/utilities/config.md' },
                { text: 'Models', link: '/supports/models/' },
            ],
            activeMatch: '/supports/',
        }
    ]
}

// sidebarGuide
function sidebarGuide() {
    return [
        {
            text: 'Guide',
            collapsed: false,
            items: [
                { text: 'Introduction', link: '/guide/' },
                { text: 'Features', link: '/guide/features.md' },
                { text: 'Installation', link: '/guide/install.md' },
                { text: 'Updating', link: '/guide/upgrade.md' },
                { text: 'Operating', link: '/guide/operating.md' },
                { text: 'Reporting Bugs', link: '/guide/feedback.md' },
                { text: 'Release Notes', link: '/guide/changelog.md' },
                { text: 'FAQ', link: '/guide/faq.md' },
            ]
        }
    ]
}

// sidebarExtensions
function sidebarExtensions() {
    return [
        {
            text: 'Extending Fresns',
            collapsed: false,
            items: [
                { text: 'Introduction', link: '/extensions/' },
                { text: 'Product Idea', link: '/extensions/idea.md' },
                { text: 'Multilingual', link: '/extensions/multilingual.md' },
                { text: 'Error Code', link: '/extensions/error-code.md' },
            ]
        },
        {
            text: 'Plugin Dev',
            collapsed: false,
            items: [
                { text: 'Introduction', link: '/extensions/plugin/' },
                { text: 'Artisan', link: '/extensions/plugin/artisan.md' },
                { text: 'Command Word', link: '/extensions/plugin/command-word.md' },
                {
                    text: 'Function Reference',
                    collapsed: false,
                    items: [
                        { text: 'Crontab and Subscribe', link: '/extensions/plugin/functions.md' },
                        { text: 'Command Word Dev', link: '/extensions/plugin/command-word-dev.md' },
                        { text: 'Verify URL Authorization', link: '/extensions/plugin/url-authorization.md' },
                    ]
                },
                {
                    text: 'Plugin Reference',
                    collapsed: false,
                    items: [
                        { text: 'Storage', link: '/extensions/plugin/storage.md' },
                        { text: 'Editor', link: '/extensions/plugin/editor.md' },
                        { text: 'Content Handler', link: '/extensions/plugin/content-handler.md' },
                    ]
                },
            ]
        },
        {
            text: 'Client Dev',
            collapsed: false,
            items: [
                { text: 'Introduction', link: '/extensions/client/' },
                {
                    text: 'Callback',
                    collapsed: false,
                    items: [
                        { text: 'Introduction', link: '/extensions/callback/' },
                        { text: 'Path Variables', link: '/extensions/callback/variables.md' },
                        { text: 'Make URL Authorization', link: '/extensions/callback/url-authorization.md' },
                    ]
                },
            ]
        },
    ]
}

// sidebarApi
function sidebarApi() {
    return [
        {
            text: 'Overview',
            collapsed: false,
            items: [
                { text: 'Introduction', link: '/api/' },
                { text: 'Error Code', link: '/api/error-code.md' },
                { text: 'Headers', link: '/api/headers.md' },
                { text: 'Common Data Structure', link: '/api/data-structure.md' },
            ]
        },
        {
            text: 'Global',
            collapsed: false,
            items: [
                { text: 'Client Status', link: '/api/global/status.md' },
                { text: 'Global Configs', link: '/api/global/configs.md' },
                { text: 'Code Messages', link: '/api/global/code-messages.md' },
                { text: 'Extend Channels', link: '/api/global/channels.md' },
                { text: 'Extend Archives', link: '/api/global/archives.md' },
                { text: 'Get Upload Token', link: '/api/global/upload-token.md' },
                { text: 'User Roles', link: '/api/global/roles.md' },
                { text: 'Content Types', link: '/api/global/content-types.md' },
                { text: 'Stickers', link: '/api/global/stickers.md' },
                { text: 'Block Words', link: '/api/global/block-words.md' },
            ]
        },
        {
            text: 'Common',
            collapsed: false,
            items: [
                { text: 'IP Information', link: '/api/common/ip-info.md' },
                { text: 'Input Tips', link: '/api/common/input-tips.md' },
                { text: 'Plugin Callback', link: '/api/common/callback.md' },
                { text: 'Send Verify Code', link: '/api/common/send-verify-code.md' },
                { text: 'Upload Log', link: '/api/common/upload-log.md' },
                { text: 'Upload File', link: '/api/common/upload-file.md' },
                { text: 'File Download Link', link: '/api/common/file-link.md' },
                { text: 'File Download Users', link: '/api/common/file-users.md' },
            ]
        },
        {
            text: 'Account',
            collapsed: false,
            items: [
                { text: 'Register', link: '/api/account/register.md' },
                { text: 'Login', link: '/api/account/login.md' },
                { text: 'Reset Password', link: '/api/account/reset-password.md' },
                { text: 'Account Detail', link: '/api/account/detail.md' },
                { text: 'Wallet Logs', link: '/api/account/wallet-logs.md' },
                { text: 'Verify Identity', link: '/api/account/verify-identity.md' },
                { text: 'Edit', link: '/api/account/edit.md' },
                { text: 'Logout', link: '/api/account/logout.md' },
                { text: 'Apply Delete', link: '/api/account/apply-delete.md' },
                { text: 'Recall Delete', link: '/api/account/recall-delete.md' },
            ]
        },
        {
            text: 'User',
            collapsed: false,
            items: [
                { text: 'User List', link: '/api/user/list.md' },
                { text: 'User Detail', link: '/api/user/detail.md' },
                { text: 'Followers You Know', link: '/api/user/followers-you-follow.md' },
                { text: 'User Interaction Users', link: '/api/user/interaction.md' },
                { text: 'User Mark List', link: '/api/user/mark-list.md' },
                { text: 'Auth', link: '/api/user/auth.md' },
                { text: 'Panel', link: '/api/user/panel.md' },
                { text: 'Extcredits', link: '/api/user/extcredits-logs.md' },
                { text: 'Edit', link: '/api/user/edit.md' },
                { text: 'Mark', link: '/api/user/mark.md' },
                { text: 'Mark Note', link: '/api/user/mark-note.md' },
            ]
        },
        {
            text: 'Message',
            collapsed: false,
            items: [
                { text: '[Notification] List', link: '/api/message/notification-list.md' },
                { text: '[Notification] Mark As Read', link: '/api/message/notification-read.md' },
                { text: '[Notification] Delete', link: '/api/message/notification-delete.md' },
                { text: '[Conversation] List', link: '/api/message/conversation-list.md' },
                { text: '[Conversation] Detail', link: '/api/message/conversation-detail.md' },
                { text: '[Conversation] Messages', link: '/api/message/conversation-messages.md' },
                { text: '[Conversation] Pin', link: '/api/message/conversation-pin.md' },
                { text: '[Conversation] Mark As Read', link: '/api/message/conversation-read.md' },
                { text: '[Conversation] Send Message', link: '/api/message/conversation-send.md' },
                { text: '[Conversation] Delete', link: '/api/message/conversation-delete.md' },
            ]
        },
        {
            text: 'Group',
            collapsed: false,
            items: [
                { text: 'Group Tree List', link: '/api/group/tree.md' },
                { text: 'Group Categories', link: '/api/group/categories.md' },
                { text: 'Group List', link: '/api/group/list.md' },
                { text: 'Group Detail', link: '/api/group/detail.md' },
                { text: 'Group Interaction Users', link: '/api/group/interaction.md' },
            ]
        },
        {
            text: 'Hashtag',
            collapsed: false,
            items: [
                { text: 'Hashtag List', link: '/api/hashtag/list.md' },
                { text: 'Hashtag Detail', link: '/api/hashtag/detail.md' },
                { text: 'Hashtag Interaction Users', link: '/api/hashtag/interaction.md' },
            ]
        },
        {
            text: 'Post',
            collapsed: false,
            items: [
                { text: 'Post List', link: '/api/post/list.md' },
                { text: 'Post List by Follow', link: '/api/post/follow.md' },
                { text: 'Post List by Nearby', link: '/api/post/nearby.md' },
                { text: 'Post Detail', link: '/api/post/detail.md' },
                { text: 'Post Interaction Users', link: '/api/post/interaction.md' },
                { text: 'Post Affiliated Users', link: '/api/post/users.md' },
                { text: 'Post Quote It List', link: '/api/post/quotes.md' },
                { text: 'Post Logs', link: '/api/post/logs.md' },
                { text: 'Post Log Detail', link: '/api/post/log-detail.md' },
                { text: 'Delete', link: '/api/post/delete.md' },
            ]
        },
        {
            text: 'Comment',
            collapsed: false,
            items: [
                { text: 'Comment List', link: '/api/comment/list.md' },
                { text: 'Comment List by Follow', link: '/api/comment/follow.md' },
                { text: 'Comment List by Nearby', link: '/api/comment/nearby.md' },
                { text: 'Comment Detail', link: '/api/comment/detail.md' },
                { text: 'Comment Interaction Users', link: '/api/comment/interaction.md' },
                { text: 'Comment Logs', link: '/api/comment/logs.md' },
                { text: 'Comment Log Detail', link: '/api/comment/log-detail.md' },
                { text: 'Delete', link: '/api/comment/delete.md' },
            ]
        },
        {
            text: 'Editor',
            collapsed: false,
            items: [
                { text: 'Quick Publish', link: '/api/editor/quick-publish.md' },
                { text: 'Editor Config', link: '/api/editor/config.md' },
                { text: 'Draft List', link: '/api/editor/drafts.md' },
                { text: 'Create Draft', link: '/api/editor/create.md' },
                { text: 'Generate Draft', link: '/api/editor/generate.md' },
                { text: 'Draft Detail', link: '/api/editor/detail.md' },
                { text: 'Update Draft', link: '/api/editor/update.md' },
                { text: 'Publish', link: '/api/editor/publish.md' },
                { text: 'Recall', link: '/api/editor/recall.md' },
                { text: 'Delete', link: '/api/editor/delete.md' },
            ]
        },
        {
            text: 'Search',
            collapsed: false,
            items: [
                { text: 'Users', link: '/api/search/users.md' },
                { text: 'Groups', link: '/api/search/groups.md' },
                { text: 'Hashtags', link: '/api/search/hashtags.md' },
                { text: 'Posts', link: '/api/search/posts.md' },
                { text: 'Comments', link: '/api/search/comments.md' },
            ]
        },
    ]
}

// sidebarDatabase
function sidebarDatabase() {
    return  [
        {
            text: 'Overview',
            collapsed: false,
            items: [
                { text: 'Introduction', link: '/database/' },
                { text: 'Numbered Description', link: '/database/number.md' },
            ]
        },
        {
            text: 'Data Structure',
            collapsed: false,
            items: [
                {
                    text: 'Systems',
                    collapsed: true,
                    items: [
                        { text: 'configs', link: '/database/systems/configs.md' },
                        { text: 'code_messages', link: '/database/systems/code-messages.md' },
                        { text: 'languages', link: '/database/systems/languages.md' },
                        { text: 'session_keys', link: '/database/systems/session-keys.md' },
                        { text: 'session_tokens', link: '/database/systems/session-tokens.md' },
                        { text: 'session_logs', link: '/database/systems/session-logs.md' },
                        { text: 'verify_codes', link: '/database/systems/verify-codes.md' },
                        { text: 'files', link: '/database/systems/files.md' },
                        { text: 'file_usages', link: '/database/systems/file-usages.md' },
                        { text: 'file_downloads', link: '/database/systems/file-downloads.md' },
                    ]
                },
                {
                    text: 'Plugins',
                    collapsed: true,
                    items: [
                        { text: 'plugins', link: '/database/plugins/plugins.md' },
                        { text: 'plugin_callbacks', link: '/database/plugins/plugin-callbacks.md' },
                        { text: 'plugin_usages', link: '/database/plugins/plugin-usages.md' },
                        { text: 'plugin_badges', link: '/database/plugins/plugin-badges.md' },
                    ]
                },
                {
                    text: 'Accounts',
                    collapsed: true,
                    items: [
                        { text: 'accounts', link: '/database/accounts/accounts.md' },
                        { text: 'account_connects', link: '/database/accounts/account-connects.md' },
                        { text: 'account_wallets', link: '/database/accounts/account-wallets.md' },
                        { text: 'account_wallet_logs', link: '/database/accounts/account-wallet-logs.md' },
                    ]
                },
                {
                    text: 'Users',
                    collapsed: true,
                    items: [
                        { text: 'roles', link: '/database/users/roles.md' },
                        { text: 'users', link: '/database/users/users.md' },
                        { text: 'user_stats', link: '/database/users/user-stats.md' },
                        { text: 'user_extcredits_logs', link: '/database/users/user-extcredits-logs.md' },
                        { text: 'user_roles', link: '/database/users/user-roles.md' },
                        { text: 'user_likes', link: '/database/users/user-likes.md' },
                        { text: 'user_follows', link: '/database/users/user-follows.md' },
                        { text: 'user_blocks', link: '/database/users/user-blocks.md' },
                    ]
                },
                {
                    text: 'Interactions',
                    collapsed: true,
                    items: [
                        { text: 'mentions', link: '/database/interactions/mentions.md' },
                        { text: 'notifications', link: '/database/interactions/notifications.md' },
                        { text: 'conversations', link: '/database/interactions/conversations.md' },
                        { text: 'conversation_messages', link: '/database/interactions/conversation-messages.md' },
                    ]
                },
                {
                    text: 'Extends',
                    collapsed: true,
                    items: [
                        { text: 'archives', link: '/database/extends/archives.md' },
                        { text: 'archive_usages', link: '/database/extends/archive-usages.md' },
                        { text: 'operations', link: '/database/extends/operations.md' },
                        { text: 'operation_usages', link: '/database/extends/operation-usages.md' },
                        { text: 'extends', link: '/database/extends/extends.md' },
                        { text: 'extend_usages', link: '/database/extends/extend-usages.md' },
                    ]
                },
                {
                    text: 'Content',
                    collapsed: true,
                    items: [
                        { text: 'posts', link: '/database/contents/posts.md' },
                        { text: 'post_appends', link: '/database/contents/post-appends.md' },
                        { text: 'post_auths', link: '/database/contents/post-auths.md' },
                        { text: 'post_users', link: '/database/contents/post-users.md' },
                        { text: 'post_logs', link: '/database/contents/post-logs.md' },
                        { text: 'comments', link: '/database/contents/comments.md' },
                        { text: 'comment_appends', link: '/database/contents/comment-appends.md' },
                        { text: 'comment_logs', link: '/database/contents/comment-logs.md' },
                    ]
                },
                {
                    text: 'Content Category',
                    collapsed: true,
                    items: [
                        { text: 'groups', link: '/database/contents/groups.md' },
                        { text: 'group_admins', link: '/database/contents/group-admins.md' },
                        { text: 'hashtags', link: '/database/contents/hashtags.md' },
                        { text: 'hashtag_usages', link: '/database/contents/hashtag-usages.md' },
                        { text: 'domains', link: '/database/contents/domains.md' },
                        { text: 'domain_links', link: '/database/contents/domain-links.md' },
                        { text: 'domain_link_usages', link: '/database/contents/domain-link-usages.md' },
                    ]
                },
                {
                    text: 'Content Config',
                    collapsed: true,
                    items: [
                        { text: 'stickers', link: '/database/contents/stickers.md' },
                        { text: 'block_words', link: '/database/contents/block-words.md' },
                        { text: 'seo', link: '/database/contents/seo.md' },
                        { text: 'placements', link: '/database/contents/placements.md' },
                    ]
                },
            ]
        },
        {
            text: 'Dictionary Data',
            collapsed: false,
            items: [
                { text: 'Platforms', link: '/database/dictionary/platforms.md' },
                { text: 'Connects', link: '/database/dictionary/connects.md' },
                { text: 'Storages', link: '/database/dictionary/storages.md' },
                { text: 'Maps', link: '/database/dictionary/maps.md' },
                { text: 'Continents', link: '/database/dictionary/continents.md' },
                { text: 'Area Codes', link: '/database/dictionary/area-codes.md' },
                { text: 'Language Codes', link: '/database/dictionary/language-codes.md' },
                { text: 'Currency Codes', link: '/database/dictionary/currency-codes.md' },
                { text: 'Timezone', link: '/database/dictionary/timezone.md' },
                { text: 'Ban Names', link: '/database/dictionary/ban-names.md' },
                { text: 'Language Pack', link: '/database/dictionary/language-pack.md' },
            ]
        },
        {
            text: 'Config Key Name',
            collapsed: false,
            items: [
                { text: 'Introduction', link: '/database/keyname/index.md' },
                {
                    text: 'Dashboard',
                    collapsed: true,
                    items: [
                        { text: 'Settings', link: '/database/keyname/settings.md' },
                    ]
                },
                {
                    text: 'Systems',
                    collapsed: true,
                    items: [
                        { text: 'Languages', link: '/database/keyname/languages.md' },
                        { text: 'Storage', link: '/database/keyname/storage.md' },
                        { text: 'General', link: '/database/keyname/general.md' },
                        { text: 'Policy', link: '/database/keyname/policy.md' },
                        { text: 'Send', link: '/database/keyname/send.md' },
                        { text: 'User', link: '/database/keyname/user.md' },
                        { text: 'Wallet', link: '/database/keyname/wallet.md' },
                    ]
                },
                {
                    text: 'Operations',
                    collapsed: true,
                    items: [
                        { text: 'Rename', link: '/database/keyname/rename.md' },
                        { text: 'Interaction', link: '/database/keyname/interaction.md' },
                        { text: 'Publish', link: '/database/keyname/publish.md' },
                    ]
                },
                {
                    text: 'Extends',
                    collapsed: true,
                    items: [
                        { text: 'Content Handler', link: '/database/keyname/content-handler.md' },
                    ]
                },
                {
                    text: 'Clients',
                    collapsed: true,
                    items: [
                        { text: 'Menus', link: '/database/keyname/menus.md' },
                        { text: 'Columns', link: '/database/keyname/columns.md' },
                        { text: 'Paths', link: '/database/keyname/paths.md' },
                        { text: 'Language Packs', link: '/database/keyname/language-pack.md' },
                        { text: 'Basic', link: '/database/keyname/basic.md' },
                    ]
                },
            ]
        },
        {
            text: 'Extend Config Key',
            collapsed: false,
            items: [
                { text: 'Preset key name', link: '/database/keyname/planning-preset.md' },
                { text: 'Generate key name', link: '/database/keyname/planning-generate.md' },
            ]
        }
    ]
}

// sidebarSupports
function sidebarSupports() {
    return  [
        {
            text: 'Command Word',
            collapsed: false,
            items: [
                { text: 'Basic', link: '/supports/cmd-word/basic.md' },
                { text: 'Send', link: '/supports/cmd-word/send.md' },
                { text: 'Account', link: '/supports/cmd-word/account.md' },
                { text: 'User', link: '/supports/cmd-word/user.md' },
                { text: 'Wallet', link: '/supports/cmd-word/wallet.md' },
                { text: 'File', link: '/supports/cmd-word/file.md' },
                { text: 'Content', link: '/supports/cmd-word/content.md' },
                { text: 'Detail', link: '/supports/cmd-word/detail.md' },
                { text: 'Manage', link: '/supports/cmd-word/manage.md' },
                { text: 'Crontab', link: '/supports/cmd-word/crontab.md' },
            ]
        },
        {
            text: 'Helpers',
            collapsed: false,
            items: [
                { text: 'Config', link: '/supports/helpers/config.md' },
                { text: 'Language', link: '/supports/helpers/language.md' },
                { text: 'Plugin', link: '/supports/helpers/plugin.md' },
                { text: 'File', link: '/supports/helpers/file.md' },
                { text: 'Date', link: '/supports/helpers/date.md' },
                { text: 'Str', link: '/supports/helpers/str.md' },
                { text: 'Primary', link: '/supports/helpers/primary.md' },
                { text: 'Interaction', link: '/supports/helpers/interaction.md' },
            ]
        },
        {
            text: 'Utilities',
            collapsed: false,
            items: [
                { text: 'General', link: '/supports/utilities/general.md' },
                { text: 'Config', link: '/supports/utilities/config.md' },
                { text: 'Array', link: '/supports/utilities/arr.md' },
                { text: 'Extend', link: '/supports/utilities/extend.md' },
                { text: 'File', link: '/supports/utilities/file.md' },
                { text: 'Interaction', link: '/supports/utilities/interaction.md' },
                { text: 'Permission', link: '/supports/utilities/permission.md' },
                { text: 'Validation', link: '/supports/utilities/validation.md' },
            ]
        },
        {
            text: 'Models',
            collapsed: false,
            items: [
                { text: 'Dataset', link: '/supports/models/' },
                { text: 'Cache Key and Tag', link: '/supports/models/cache.md' },
            ]
        },
    ]
}

// sidebarCommunity
function sidebarCommunity() {
    return  [
        {
            text: 'About',
            collapsed: false,
            items: [
                { text: 'Teams', link: '/community/teams.md' },
                { text: 'Join', link: '/community/join.md' },
                { text: 'Sponsor', link: '/community/sponsor.md' },
            ]
        },
        {
            text: 'Contributing',
            collapsed: false,
            items: [
                { text: 'Guide', link: '/contributing/' },
                { text: 'Translations', link: '/contributing/translations.md' },
            ]
        },
        {
            text: 'Interaction',
            collapsed: false,
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
        { text: '指南', link: '/zh-Hans/guide/', activeMatch: '/zh-Hans/guide/' },
        { text: '扩展', link: '/zh-Hans/extensions/', activeMatch: '/zh-Hans/extensions/' },
        { text: 'API', link: '/zh-Hans/api/', activeMatch: '/zh-Hans/api/' },
        { text: '数据库', link: '/zh-Hans/database/', activeMatch: '/zh-Hans/database/' },
        {
            text: '开发支持',
            items: [
                { text: '功能命令字', link: '/zh-Hans/supports/cmd-word/basic.md' },
                { text: '辅助函数', link: '/zh-Hans/supports/helpers/config.md' },
                { text: '实用程序', link: '/zh-Hans/supports/utilities/config.md' },
                { text: '数据模型', link: '/zh-Hans/supports/models/' },
            ],
            activeMatch: '/zh-Hans/supports/',
        }
    ]
}

// sidebarGuide
function sidebarGuideForZh() {
    return [
        {
            text: '使用指南',
            collapsed: false,
            items: [
                { text: '介绍', link: '/zh-Hans/guide/' },
                { text: '特征', link: '/zh-Hans/guide/features.md' },
                { text: '安装', link: '/zh-Hans/guide/install.md' },
                { text: '升级', link: '/zh-Hans/guide/upgrade.md' },
                { text: '运营', link: '/zh-Hans/guide/operating.md' },
                { text: '提交反馈', link: '/zh-Hans/guide/feedback.md' },
                { text: '更新记录', link: '/zh-Hans/guide/changelog.md' },
                { text: '常见问题', link: '/zh-Hans/guide/faq.md' },
                { text: 'Upgrade to v3 修改记录', link: '/zh-Hans/guide/changelog-to-v3.md' },
            ]
        }
    ]
}

// sidebarExtensions
function sidebarExtensionsForZh() {
    return [
        {
            text: '扩展 Fresns',
            collapsed: false,
            items: [
                { text: '介绍', link: '/zh-Hans/extensions/' },
                { text: '产品理念', link: '/zh-Hans/extensions/idea.md' },
                { text: '多语言说明', link: '/zh-Hans/extensions/multilingual.md' },
                { text: '状态码使用', link: '/zh-Hans/extensions/error-code.md' },
            ]
        },
        {
            text: '插件开发',
            collapsed: false,
            items: [
                { text: '介绍', link: '/zh-Hans/extensions/plugin/' },
                { text: '插件指令', link: '/zh-Hans/extensions/plugin/artisan.md' },
                { text: '命令字使用', link: '/zh-Hans/extensions/plugin/command-word.md' },
                {
                    text: '功能参考',
                    collapsed: false,
                    items: [
                        { text: '定时任务和订阅', link: '/zh-Hans/extensions/plugin/functions.md' },
                        { text: '命令字功能开发', link: '/zh-Hans/extensions/plugin/command-word-dev.md' },
                        { text: '验证路径凭证', link: '/zh-Hans/extensions/plugin/url-authorization.md' },
                    ]
                },
                {
                    text: '插件参考',
                    collapsed: false,
                    items: [
                        { text: '存储服务开发', link: '/zh-Hans/extensions/plugin/storage.md' },
                        { text: '编辑器开发', link: '/zh-Hans/extensions/plugin/editor.md' },
                        { text: '内容处理开发', link: '/zh-Hans/extensions/plugin/content-handler.md' },
                    ]
                },
            ]
        },
        {
            text: '客户端开发',
            collapsed: false,
            items: [
                { text: '介绍', link: '/zh-Hans/extensions/client/' },
                {
                    text: '回调使用',
                    collapsed: false,
                    items: [
                        { text: '介绍', link: '/zh-Hans/extensions/callback/' },
                        { text: '路径变量名', link: '/zh-Hans/extensions/callback/variables.md' },
                        { text: '生成路径凭证', link: '/zh-Hans/extensions/callback/url-authorization.md' },
                    ]
                },
            ]
        },
    ]
}

// sidebarApi
function sidebarApiForZh() {
    return [
        {
            text: '总览',
            collapsed: false,
            items: [
                { text: '介绍', link: '/zh-Hans/api/' },
                { text: '错误码', link: '/zh-Hans/api/error-code.md' },
                { text: '请求标头', link: '/zh-Hans/api/headers.md' },
                { text: '通用数据结构', link: '/zh-Hans/api/data-structure.md' },
            ]
        },
        {
            text: '全局配置',
            collapsed: false,
            items: [
                { text: '客户端状态', link: '/zh-Hans/api/global/status.md' },
                { text: '全局配置信息', link: '/zh-Hans/api/global/configs.md' },
                { text: '状态码信息', link: '/zh-Hans/api/global/code-messages.md' },
                { text: '扩展频道', link: '/zh-Hans/api/global/channels.md' },
                { text: '扩展档案配置', link: '/zh-Hans/api/global/archives.md' },
                { text: '获取上传凭证', link: '/zh-Hans/api/global/upload-token.md' },
                { text: '用户角色', link: '/zh-Hans/api/global/roles.md' },
                { text: '内容类型', link: '/zh-Hans/api/global/content-types.md' },
                { text: '表情图', link: '/zh-Hans/api/global/stickers.md' },
                { text: '阻止词', link: '/zh-Hans/api/global/block-words.md' },
            ]
        },
        {
            text: '公共业务',
            collapsed: false,
            items: [
                { text: 'IP 信息', link: '/zh-Hans/api/common/ip-info.md' },
                { text: '输入提示信息', link: '/zh-Hans/api/common/input-tips.md' },
                { text: '回调返参查询', link: '/zh-Hans/api/common/callback.md' },
                { text: '发送验证码', link: '/zh-Hans/api/common/send-verify-code.md' },
                { text: '上传日志', link: '/zh-Hans/api/common/upload-log.md' },
                { text: '上传文件', link: '/zh-Hans/api/common/upload-file.md' },
                { text: '文件下载链接', link: '/zh-Hans/api/common/file-link.md' },
                { text: '下载过文件的用户', link: '/zh-Hans/api/common/file-users.md' },
            ]
        },
        {
            text: '账号',
            collapsed: false,
            items: [
                { text: '注册', link: '/zh-Hans/api/account/register.md' },
                { text: '登录', link: '/zh-Hans/api/account/login.md' },
                { text: '重置密码', link: '/zh-Hans/api/account/reset-password.md' },
                { text: '账号基本信息', link: '/zh-Hans/api/account/detail.md' },
                { text: '钱包交易记录', link: '/zh-Hans/api/account/wallet-logs.md' },
                { text: '身份验证', link: '/zh-Hans/api/account/verify-identity.md' },
                { text: '修改账号资料', link: '/zh-Hans/api/account/edit.md' },
                { text: '退出登录', link: '/zh-Hans/api/account/logout.md' },
                { text: '申请删除账号', link: '/zh-Hans/api/account/apply-delete.md' },
                { text: '撤销删除申请', link: '/zh-Hans/api/account/recall-delete.md' },
            ]
        },
        {
            text: '用户',
            collapsed: false,
            items: [
                { text: '获取用户[列表]', link: '/zh-Hans/api/user/list.md' },
                { text: '获取用户[详情]', link: '/zh-Hans/api/user/detail.md' },
                { text: '获取用户认识的关注者', link: '/zh-Hans/api/user/followers-you-follow.md' },
                { text: '获取用户[详情] 互动列表', link: '/zh-Hans/api/user/interaction.md' },
                { text: '获取用户[详情] 标记列表', link: '/zh-Hans/api/user/mark-list.md' },
                { text: '用户登录', link: '/zh-Hans/api/user/auth.md' },
                { text: '用户面板', link: '/zh-Hans/api/user/panel.md' },
                { text: '用户扩展分值记录', link: '/zh-Hans/api/user/extcredits-logs.md' },
                { text: '修改用户资料', link: '/zh-Hans/api/user/edit.md' },
                { text: '操作标记', link: '/zh-Hans/api/user/mark.md' },
                { text: '标记备注', link: '/zh-Hans/api/user/mark-note.md' },
            ]
        },
        {
            text: '消息',
            collapsed: false,
            items: [
                { text: '[通知]获取消息列表', link: '/zh-Hans/api/message/notification-list.md' },
                { text: '[通知]更新阅读状态', link: '/zh-Hans/api/message/notification-read.md' },
                { text: '[通知]删除消息', link: '/zh-Hans/api/message/notification-delete.md' },
                { text: '[对话]获取对话列表', link: '/zh-Hans/api/message/conversation-list.md' },
                { text: '[对话]获取对话详情', link: '/zh-Hans/api/message/conversation-detail.md' },
                { text: '[对话]获取消息列表', link: '/zh-Hans/api/message/conversation-messages.md' },
                { text: '[对话]置顶对话', link: '/zh-Hans/api/message/conversation-pin.md' },
                { text: '[对话]更新阅读状态', link: '/zh-Hans/api/message/conversation-read.md' },
                { text: '[对话]发送消息', link: '/zh-Hans/api/message/conversation-send.md' },
                { text: '[对话]删除对话或对话的消息', link: '/zh-Hans/api/message/conversation-delete.md' },
            ]
        },
        {
            text: '小组',
            collapsed: false,
            items: [
                { text: '获取小组[树结构列表]', link: '/zh-Hans/api/group/tree.md' },
                { text: '获取小组[列表] 分类', link: '/zh-Hans/api/group/categories.md' },
                { text: '获取小组[列表] 小组', link: '/zh-Hans/api/group/list.md' },
                { text: '获取小组[详情]', link: '/zh-Hans/api/group/detail.md' },
                { text: '获取小组[详情] 互动列表', link: '/zh-Hans/api/group/interaction.md' },
            ]
        },
        {
            text: '话题',
            collapsed: false,
            items: [
                { text: '获取话题[列表]', link: '/zh-Hans/api/hashtag/list.md' },
                { text: '获取话题[详情]', link: '/zh-Hans/api/hashtag/detail.md' },
                { text: '获取话题[详情] 互动列表', link: '/zh-Hans/api/hashtag/interaction.md' },
            ]
        },
        {
            text: '帖子',
            collapsed: false,
            items: [
                { text: '获取帖子[列表]', link: '/zh-Hans/api/post/list.md' },
                { text: '获取帖子[列表] 关注对象的', link: '/zh-Hans/api/post/follow.md' },
                { text: '获取帖子[列表] 位置附近的', link: '/zh-Hans/api/post/nearby.md' },
                { text: '获取帖子[详情]', link: '/zh-Hans/api/post/detail.md' },
                { text: '获取帖子[详情] 互动列表', link: '/zh-Hans/api/post/interaction.md' },
                { text: '获取帖子[详情] 附属用户列表', link: '/zh-Hans/api/post/users.md' },
                { text: '获取帖子[详情] 引用它的帖子列表', link: '/zh-Hans/api/post/quotes.md' },
                { text: '获取帖子[详情] 日志列表', link: '/zh-Hans/api/post/logs.md' },
                { text: '获取帖子[详情] 日志详情', link: '/zh-Hans/api/post/log-detail.md' },
                { text: '删除帖子', link: '/zh-Hans/api/post/delete.md' },
            ]
        },
        {
            text: '评论',
            collapsed: false,
            items: [
                { text: '获取评论[列表]', link: '/zh-Hans/api/comment/list.md' },
                { text: '获取评论[列表] 关注对象的', link: '/zh-Hans/api/comment/follow.md' },
                { text: '获取评论[列表] 位置附近的', link: '/zh-Hans/api/comment/nearby.md' },
                { text: '获取评论[详情]', link: '/zh-Hans/api/comment/detail.md' },
                { text: '获取评论[详情] 互动列表', link: '/zh-Hans/api/comment/interaction.md' },
                { text: '获取评论[详情] 日志列表', link: '/zh-Hans/api/comment/logs.md' },
                { text: '获取评论[详情] 日志详情', link: '/zh-Hans/api/comment/log-detail.md' },
                { text: '删除评论', link: '/zh-Hans/api/comment/delete.md' },
            ]
        },
        {
            text: '编辑器',
            collapsed: false,
            items: [
                { text: '快速发表', link: '/zh-Hans/api/editor/quick-publish.md' },
                { text: '编辑器配置信息', link: '/zh-Hans/api/editor/config.md' },
                { text: '获取草稿列表', link: '/zh-Hans/api/editor/drafts.md' },
                { text: '创建草稿', link: '/zh-Hans/api/editor/create.md' },
                { text: '生成编辑草稿', link: '/zh-Hans/api/editor/generate.md' },
                { text: '获取草稿详情', link: '/zh-Hans/api/editor/detail.md' },
                { text: '更新草稿内容', link: '/zh-Hans/api/editor/update.md' },
                { text: '提交发表（或审核）', link: '/zh-Hans/api/editor/publish.md' },
                { text: '撤回审核中草稿', link: '/zh-Hans/api/editor/recall.md' },
                { text: '删除草稿', link: '/zh-Hans/api/editor/delete.md' },
            ]
        },
        {
            text: '搜索',
            collapsed: false,
            items: [
                { text: '用户', link: '/zh-Hans/api/search/users.md' },
                { text: '小组', link: '/zh-Hans/api/search/groups.md' },
                { text: '话题', link: '/zh-Hans/api/search/hashtags.md' },
                { text: '帖子', link: '/zh-Hans/api/search/posts.md' },
                { text: '评论', link: '/zh-Hans/api/search/comments.md' },
            ]
        },
    ]
}

// sidebarDatabase
function sidebarDatabaseForZh() {
    return  [
        {
            text: '总览',
            collapsed: false,
            items: [
                { text: '介绍', link: '/zh-Hans/database/' },
                { text: '编号数据说明', link: '/zh-Hans/database/number.md' },
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
                        { text: 'configs 全局配置表', link: '/zh-Hans/database/systems/configs.md' },
                        { text: 'code_messages 全局状态码信息表', link: '/zh-Hans/database/systems/code-messages.md' },
                        { text: 'languages 全局语言内容表', link: '/zh-Hans/database/systems/languages.md' },
                        { text: 'session_keys 交互密钥表', link: '/zh-Hans/database/systems/session-keys.md' },
                        { text: 'session_tokens 交互凭证表', link: '/zh-Hans/database/systems/session-tokens.md' },
                        { text: 'session_logs 交互日志表', link: '/zh-Hans/database/systems/session-logs.md' },
                        { text: 'verify_codes 验证码表', link: '/zh-Hans/database/systems/verify-codes.md' },
                        { text: 'files 文件表', link: '/zh-Hans/database/systems/files.md' },
                        { text: 'file_usages 文件使用记录表', link: '/zh-Hans/database/systems/file-usages.md' },
                        { text: 'file_downloads 文件下载记录表', link: '/zh-Hans/database/systems/file-downloads.md' },
                    ]
                },
                {
                    text: '插件',
                    collapsed: true,
                    items: [
                        { text: 'plugins 插件表', link: '/zh-Hans/database/plugins/plugins.md' },
                        { text: 'plugin_callbacks 插件回调表', link: '/zh-Hans/database/plugins/plugin-callbacks.md' },
                        { text: 'plugin_usages 插件关联使用表', link: '/zh-Hans/database/plugins/plugin-usages.md' },
                        { text: 'plugin_badges 插件徽标数据表', link: '/zh-Hans/database/plugins/plugin-badges.md' },
                    ]
                },
                {
                    text: '账号',
                    collapsed: true,
                    items: [
                        { text: 'accounts 账号主表', link: '/zh-Hans/database/accounts/accounts.md' },
                        { text: 'account_connects 账号互联凭证表', link: '/zh-Hans/database/accounts/account-connects.md' },
                        { text: 'account_wallets 账号钱包表', link: '/zh-Hans/database/accounts/account-wallets.md' },
                        { text: 'account_wallet_logs 账号钱包交易日志表', link: '/zh-Hans/database/accounts/account-wallet-logs.md' },
                    ]
                },
                {
                    text: '用户',
                    collapsed: true,
                    items: [
                        { text: 'roles 角色表', link: '/zh-Hans/database/users/roles.md' },
                        { text: 'users 用户主表', link: '/zh-Hans/database/users/users.md' },
                        { text: 'user_stats 用户数据统计表', link: '/zh-Hans/database/users/user-stats.md' },
                        { text: 'user_extcredits_logs 用户扩展分值日志表', link: '/zh-Hans/database/users/user-extcredits-logs.md' },
                        { text: 'user_roles 用户角色关联表', link: '/zh-Hans/database/users/user-roles.md' },
                        { text: 'user_likes 用户点赞记录表', link: '/zh-Hans/database/users/user-likes.md' },
                        { text: 'user_follows 用户关注表', link: '/zh-Hans/database/users/user-follows.md' },
                        { text: 'user_blocks 用户屏蔽表', link: '/zh-Hans/database/users/user-blocks.md' },
                    ]
                },
                {
                    text: '互动',
                    collapsed: true,
                    items: [
                        { text: 'mentions 艾特记录表', link: '/zh-Hans/database/interactions/mentions.md' },
                        { text: 'notifications 通知表', link: '/zh-Hans/database/interactions/notifications.md' },
                        { text: 'conversations 对话表', link: '/zh-Hans/database/interactions/conversations.md' },
                        { text: 'conversation_messages 对话内容表', link: '/zh-Hans/database/interactions/conversation-messages.md' },
                    ]
                },
                {
                    text: '扩展',
                    collapsed: true,
                    items: [
                        { text: 'archives 扩展参数表', link: '/zh-Hans/database/extends/archives.md' },
                        { text: 'archive_usages 扩展参数使用表', link: '/zh-Hans/database/extends/archive-usages.md' },
                        { text: 'operations 扩展资料表', link: '/zh-Hans/database/extends/operations.md' },
                        { text: 'operation_usages 扩展资料使用表', link: '/zh-Hans/database/extends/operation-usages.md' },
                        { text: 'extends 扩展内容表', link: '/zh-Hans/database/extends/extends.md' },
                        { text: 'extend_usages 扩展内容使用表', link: '/zh-Hans/database/extends/extend-usages.md' },
                    ]
                },
                {
                    text: '内容信息',
                    collapsed: true,
                    items: [
                        { text: 'posts 帖子主表', link: '/zh-Hans/database/contents/posts.md' },
                        { text: 'post_appends 帖子-附属表', link: '/zh-Hans/database/contents/post-appends.md' },
                        { text: 'post_auths 帖子-授权记录表', link: '/zh-Hans/database/contents/post-auths.md' },
                        { text: 'post_users 帖子-特定用户表', link: '/zh-Hans/database/contents/post-users.md' },
                        { text: 'post_logs 帖子-日志表', link: '/zh-Hans/database/contents/post-logs.md' },
                        { text: 'comments 评论主表', link: '/zh-Hans/database/contents/comments.md' },
                        { text: 'comment_appends 评论-附属表', link: '/zh-Hans/database/contents/comment-appends.md' },
                        { text: 'comment_logs 评论-日志表', link: '/zh-Hans/database/contents/comment-logs.md' },
                    ]
                },
                {
                    text: '内容归类',
                    collapsed: true,
                    items: [
                        { text: 'groups 小组表', link: '/zh-Hans/database/contents/groups.md' },
                        { text: 'group_admins 小组管理员表', link: '/zh-Hans/database/contents/group-admins.md' },
                        { text: 'hashtags 话题表', link: '/zh-Hans/database/contents/hashtags.md' },
                        { text: 'hashtag_usages 话题使用记录表', link: '/zh-Hans/database/contents/hashtag-usages.md' },
                        { text: 'domains 域名表', link: '/zh-Hans/database/contents/domains.md' },
                        { text: 'domain_links 域名链接表', link: '/zh-Hans/database/contents/domain-links.md' },
                        { text: 'domain_link_usages 链接使用记录表', link: '/zh-Hans/database/contents/domain-link-usages.md' },
                    ]
                },
                {
                    text: '内容配置',
                    collapsed: true,
                    items: [
                        { text: 'stickers 表情表', link: '/zh-Hans/database/contents/stickers.md' },
                        { text: 'block_words 阻止词表', link: '/zh-Hans/database/contents/block-words.md' },
                        { text: 'seo 搜索引擎优化信息表', link: '/zh-Hans/database/contents/seo.md' },
                        { text: 'placements 植入信息表', link: '/zh-Hans/database/contents/placements.md' },
                    ]
                },
            ]
        },
        {
            text: '字典数据',
            collapsed: false,
            items: [
                { text: '终端平台编号', link: '/zh-Hans/database/dictionary/platforms.md' },
                { text: '互联平台编号', link: '/zh-Hans/database/dictionary/connects.md' },
                { text: '存储服务商编号', link: '/zh-Hans/database/dictionary/storages.md' },
                { text: '地图服务商编号', link: '/zh-Hans/database/dictionary/maps.md' },
                { text: '七大洲编号', link: '/zh-Hans/database/dictionary/continents.md' },
                { text: '地区代码', link: '/zh-Hans/database/dictionary/area-codes.md' },
                { text: '语言代码', link: '/zh-Hans/database/dictionary/language-codes.md' },
                { text: '货币代码', link: '/zh-Hans/database/dictionary/currency-codes.md' },
                { text: '时区选项', link: '/zh-Hans/database/dictionary/timezone.md' },
                { text: '禁用名', link: '/zh-Hans/database/dictionary/ban-names.md' },
                { text: '初始语言包', link: '/zh-Hans/database/dictionary/language-pack.md' },
            ]
        },
        {
            text: '配置键名',
            collapsed: false,
            items: [
                { text: '介绍', link: '/zh-Hans/database/keyname/index.md' },
                {
                    text: '仪表盘',
                    collapsed: true,
                    items: [
                        { text: '设置', link: '/zh-Hans/database/keyname/settings.md' },
                    ]
                },
                {
                    text: '系统',
                    collapsed: true,
                    items: [
                        { text: '语言设置', link: '/zh-Hans/database/keyname/languages.md' },
                        { text: '存储设置', link: '/zh-Hans/database/keyname/storage.md' },
                        { text: '站点设置', link: '/zh-Hans/database/keyname/general.md' },
                        { text: '政策条款', link: '/zh-Hans/database/keyname/policy.md' },
                        { text: '发信设置', link: '/zh-Hans/database/keyname/send.md' },
                        { text: '用户设置', link: '/zh-Hans/database/keyname/user.md' },
                        { text: '钱包设置', link: '/zh-Hans/database/keyname/wallet.md' },
                    ]
                },
                {
                    text: '运营',
                    collapsed: true,
                    items: [
                        { text: '命名配置', link: '/zh-Hans/database/keyname/rename.md' },
                        { text: '互动配置', link: '/zh-Hans/database/keyname/interaction.md' },
                        { text: '发表配置', link: '/zh-Hans/database/keyname/publish.md' },
                    ]
                },
                {
                    text: '扩展',
                    collapsed: true,
                    items: [
                        { text: '内容处理扩展', link: '/zh-Hans/database/keyname/content-handler.md' },
                    ]
                },
                {
                    text: '客户端',
                    collapsed: true,
                    items: [
                        { text: '菜单配置', link: '/zh-Hans/database/keyname/menus.md' },
                        { text: '栏目配置', link: '/zh-Hans/database/keyname/columns.md' },
                        { text: '路径配置', link: '/zh-Hans/database/keyname/paths.md' },
                        { text: '语言包配置', link: '/zh-Hans/database/keyname/language-pack.md' },
                        { text: '客户端基础配置', link: '/zh-Hans/database/keyname/basic.md' },
                    ]
                },
            ]
        },
        {
            text: '扩展配置键名',
            collapsed: false,
            items: [
                { text: '预设键名', link: '/zh-Hans/database/keyname/planning-preset.md' },
                { text: '规范生成键名', link: '/zh-Hans/database/keyname/planning-generate.md' },
            ]
        }
    ]
}

// sidebarSupports
function sidebarSupportsForZh() {
    return  [
        {
            text: '功能命令字',
            collapsed: false,
            items: [
                { text: '基础功能', link: '/zh-Hans/supports/cmd-word/basic.md' },
                { text: '发信功能', link: '/zh-Hans/supports/cmd-word/send.md' },
                { text: '账号功能', link: '/zh-Hans/supports/cmd-word/account.md' },
                { text: '用户功能', link: '/zh-Hans/supports/cmd-word/user.md' },
                { text: '钱包功能', link: '/zh-Hans/supports/cmd-word/wallet.md' },
                { text: '文件功能', link: '/zh-Hans/supports/cmd-word/file.md' },
                { text: '内容功能', link: '/zh-Hans/supports/cmd-word/content.md' },
                { text: '详情功能', link: '/zh-Hans/supports/cmd-word/detail.md' },
                { text: '管理功能', link: '/zh-Hans/supports/cmd-word/manage.md' },
                { text: '定时任务', link: '/zh-Hans/supports/cmd-word/crontab.md' },
            ]
        },
        {
            text: '辅助函数',
            collapsed: false,
            items: [
                { text: '配置 ConfigHelper', link: '/zh-Hans/supports/helpers/config.md' },
                { text: '语言 LanguageHelper', link: '/zh-Hans/supports/helpers/language.md' },
                { text: '插件 PluginHelper', link: '/zh-Hans/supports/helpers/plugin.md' },
                { text: '文件 FileHelper', link: '/zh-Hans/supports/helpers/file.md' },
                { text: '时间 DateHelper', link: '/zh-Hans/supports/helpers/date.md' },
                { text: '数据处理 StrHelper', link: '/zh-Hans/supports/helpers/str.md' },
                { text: '主键转换 PrimaryHelper', link: '/zh-Hans/supports/helpers/primary.md' },
                { text: '互动配置 InteractionHelper', link: '/zh-Hans/supports/helpers/interaction.md' },
            ]
        },
        {
            text: '实用程序',
            collapsed: false,
            items: [
                { text: '通用工具 GeneralUtility', link: '/zh-Hans/supports/utilities/general.md' },
                { text: '配置工具 ConfigUtility', link: '/zh-Hans/supports/utilities/config.md' },
                { text: '数组工具 ArrUtility', link: '/zh-Hans/supports/utilities/arr.md' },
                { text: '扩展工具 ExtendUtility', link: '/zh-Hans/supports/utilities/extend.md' },
                { text: '文件工具 FileUtility', link: '/zh-Hans/supports/utilities/file.md' },
                { text: '互动工具 InteractionUtility', link: '/zh-Hans/supports/utilities/interaction.md' },
                { text: '鉴权工具 PermissionUtility', link: '/zh-Hans/supports/utilities/permission.md' },
                { text: '验证工具 ValidationUtility', link: '/zh-Hans/supports/utilities/validation.md' },
            ]
        },
        {
            text: '数据模型',
            collapsed: false,
            items: [
                { text: '数据集模型', link: '/zh-Hans/supports/models/' },
                { text: '缓存键名和标签', link: '/zh-Hans/supports/models/cache.md' },
            ]
        },
    ]
}

// sidebarCommunity
function sidebarCommunityForZh() {
    return  [
        {
            text: '关于',
            collapsed: false,
            items: [
                { text: '团队', link: '/zh-Hans/community/teams.md' },
                { text: '加入我们', link: '/zh-Hans/community/join.md' },
                { text: '赞助我们', link: '/zh-Hans/community/sponsor.md' },
            ]
        },
        {
            text: '贡献',
            collapsed: false,
            items: [
                { text: '贡献指南', link: '/zh-Hans/contributing/' },
                { text: '翻译文档', link: '/zh-Hans/contributing/translations.md' },
            ]
        },
        {
            text: '互动',
            collapsed: false,
            items: [
                { text: '互动交流', link: 'https://discuss.fresns.org/zh-Hans' },
                { text: '应用市场', link: 'https://marketplace.fresns.com/zh-Hans/open-source' },
            ]
        },
    ]
}
