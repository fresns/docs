import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',

    title: 'Fresns',
    description: 'Fresns is a free and open source social network service software, a general-purpose community product designed for cross-platform, and supports flexible and diverse content forms. It conforms to the trend of the times, satisfies a variety of operating scenarios, is more open and easier to re-development.',

    lastUpdated: true,

    head: [
        ['link', { rel: 'icon', type: 'image/png', href: 'https://files.fresns.org/wiki/icons/fresns.png' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: 'Fresns' }],
        ['meta', { property: 'og:description', content: 'Cross-platform general-purpose multiple content forms social network service software' }],
        ['meta', { property: 'og:image', content: 'https://files.fresns.org/wiki/images/og-image.jpg' }],
        ['meta', { property: 'og:url', content: 'https://fresns.org' }],
    ],

    themeConfig:{
        logo: 'https://files.fresns.org/wiki/icons/fresns.png',
        nav: navbar(),

        localeLinks: {
            text: 'English',
            items: [
                { text: '简体中文', link: 'https://fresns.cn' },
            ]
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
            copyright: 'Copyright © 2021-2022 <a href="https://github.com/jarvis-tang" target="_blank">Jarvis Tang</a>',
        },

        editLink: {
            pattern: 'https://github.com/fresns/docs/tree/main/wiki/en-US/:path'
        }
    }
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
        },
        {
            text: 'Ecosystem',
            items: [
                { text: 'Teams', link: '/community/teams.md' },
                { text: 'Join', link: '/community/join.md' },
                { text: 'Sponsor', link: '/community/sponsor.md' },
                { text: 'Contributing', link: '/contributing/' },
                { text: 'Community', link: 'https://discuss.fresns.org' },
            ],
            activeMatch: `^/(community|contributing)/`,
        }
    ]
}

// sidebarGuide
function sidebarGuide() {
    return [
        {
            text: 'Guide',
            collapsible: true,
            items: [
                { text: 'Introduction', link: '/guide/' },
                { text: 'Features', link: '/guide/features.md' },
                { text: 'Installation', link: '/guide/install.md' },
                { text: 'Updating', link: '/guide/upgrade.md' },
                { text: 'Operating', link: '/guide/operating.md' },
                { text: 'Reporting Bugs', link: '/guide/feedback.md' },
                { text: 'FAQ', link: '/guide/faq.md' },
            ]
        },
        {
            text: 'Server Configuration',
            collapsible: true,
            items: [
                { text: 'Baota Panel', link: '/guide/install/baota.md' },
            ]
        }
    ]
}

// sidebarExtensions
function sidebarExtensions() {
    return [
        {
            text: 'Extending Fresns',
            collapsible: true,
            items: [
                { text: 'Introduction', link: '/extensions/' },
                { text: 'Product Idea', link: '/extensions/idea.md' },
                { text: 'Multilingual', link: '/extensions/multilingual.md' },
                { text: 'Error Code', link: '/extensions/error-code.md' },
            ]
        },
        {
            text: 'Plugin Dev',
            collapsible: true,
            items: [
                { text: 'Introduction', link: '/extensions/plugin/' },
                { text: 'Artisan', link: '/extensions/plugin/artisan.md' },
                { text: 'Command Word', link: '/extensions/plugin/command-word.md' },
                {
                    text: 'Function Reference',
                    collapsible: true,
                    items: [
                        { text: 'Crontab and Subscribe', link: '/extensions/plugin/functions.md' },
                        { text: 'Command Word Dev', link: '/extensions/plugin/command-word-dev.md' },
                        { text: 'Verify URL Sign', link: '/extensions/plugin/url-sign.md' },
                    ]
                },
                {
                    text: 'Plugin Reference',
                    collapsible: true,
                    items: [
                        { text: 'Storage', link: '/extensions/plugin/storage.md' },
                        { text: 'Editor', link: '/extensions/plugin/editor.md' },
                        { text: 'Content Handler', link: '/extensions/plugin/content-handler.md' },
                        { text: 'Web Engine', link: '/extensions/plugin/engine.md' },
                    ]
                },
            ]
        },
        {
            text: 'Theme Dev',
            collapsible: true,
            items: [
                { text: 'Introduction', link: '/extensions/theme/' },
                { text: 'Functions', link: '/extensions/theme/functions.md' },
                { text: 'Structure', link: '/extensions/theme/structure.md' },
                { text: 'Template Tags', link: '/extensions/theme/tags.md' },
            ]
        },
        {
            text: 'Callback',
            collapsible: true,
            items: [
                { text: 'Introduction', link: '/extensions/callback/' },
                { text: 'Path Variables', link: '/extensions/callback/variables.md' },
                { text: 'Make URL Sign', link: '/extensions/callback/url-sign.md' },
            ]
        },
    ]
}

// sidebarApi
function sidebarApi() {
    return [
        {
            text: 'Overview',
            collapsible: true,
            items: [
                { text: 'Introduction', link: '/api/' },
                { text: 'Error Code', link: '/api/error-code.md' },
                { text: 'Headers', link: '/api/headers.md' },
                { text: 'Common Data Structure', link: '/api/data-structure.md' },
            ]
        },
        {
            text: 'Global',
            collapsible: true,
            items: [
                { text: 'Global Configs', link: '/api/global/configs.md' },
                { text: 'Extend Archives', link: '/api/global/archives.md' },
                { text: 'Get Upload Token', link: '/api/global/upload-token.md' },
                { text: 'User Roles', link: '/api/global/roles.md' },
                { text: 'Map Services', link: '/api/global/maps.md' },
                { text: 'Content Type', link: '/api/global/content-type.md' },
                { text: 'Stickers', link: '/api/global/stickers.md' },
                { text: 'Block Words', link: '/api/global/block-words.md' },
            ]
        },
        {
            text: 'Common',
            collapsible: true,
            items: [
                { text: 'Input Tips', link: '/api/common/input-tips.md' },
                { text: 'Send Verify Code', link: '/api/common/send-verify-code.md' },
                { text: 'Upload Log', link: '/api/common/upload-log.md' },
                { text: 'Upload File', link: '/api/common/upload-file.md' },
                { text: 'File Download Link', link: '/api/common/file-download-link.md' },
                { text: 'File Download Users', link: '/api/common/file-users.md' },
            ]
        },
        {
            text: 'Account',
            collapsible: true,
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
                { text: 'Revoke Delete', link: '/api/account/revoke-delete.md' },
            ]
        },
        {
            text: 'User',
            collapsible: true,
            items: [
                { text: 'User List', link: '/api/user/list.md' },
                { text: 'User Detail', link: '/api/user/detail.md' },
                { text: 'User Interactive Users', link: '/api/user/interactive.md' },
                { text: 'User Mark List', link: '/api/user/mark-list.md' },
                { text: 'Auth', link: '/api/user/auth.md' },
                { text: 'Panel', link: '/api/user/panel.md' },
                { text: 'Edit', link: '/api/user/edit.md' },
                { text: 'Mark', link: '/api/user/mark.md' },
                { text: 'Mark Note', link: '/api/user/mark-note.md' },
            ]
        },
        {
            text: 'Message',
            collapsible: true,
            items: [
                { text: '[Notify] List', link: '/api/message/notify-list.md' },
                { text: '[Notify] Mark As Read', link: '/api/message/notify-read.md' },
                { text: '[Notify] Delete', link: '/api/message/notify-delete.md' },
                { text: '[Dialog] List', link: '/api/message/dialog-list.md' },
                { text: '[Dialog] Detail', link: '/api/message/dialog-detail.md' },
                { text: '[Dialog] Messages', link: '/api/message/dialog-messages.md' },
                { text: '[Dialog] Mark As Read', link: '/api/message/dialog-read.md' },
                { text: '[Dialog] Send Message', link: '/api/message/dialog-send.md' },
                { text: '[Dialog] Delete', link: '/api/message/dialog-delete.md' },
            ]
        },
        {
            text: 'Group',
            collapsible: true,
            items: [
                { text: 'Group Tree List', link: '/api/group/tree.md' },
                { text: 'Group Categories', link: '/api/group/categories.md' },
                { text: 'Group List', link: '/api/group/list.md' },
                { text: 'Group Detail', link: '/api/group/detail.md' },
                { text: 'Group Interactive Users', link: '/api/group/interactive.md' },
            ]
        },
        {
            text: 'Hashtag',
            collapsible: true,
            items: [
                { text: 'Hashtag List', link: '/api/hashtag/list.md' },
                { text: 'Hashtag Detail', link: '/api/hashtag/detail.md' },
                { text: 'Hashtag Interactive Users', link: '/api/hashtag/interactive.md' },
            ]
        },
        {
            text: 'Post',
            collapsible: true,
            items: [
                { text: 'Post List', link: '/api/post/list.md' },
                { text: 'Post List by Follow', link: '/api/post/follow.md' },
                { text: 'Post List by Nearby', link: '/api/post/nearby.md' },
                { text: 'Post Detail', link: '/api/post/detail.md' },
                { text: 'Post Interactive Users', link: '/api/post/interactive.md' },
                { text: 'Post Affiliate User List', link: '/api/post/user-list.md' },
                { text: 'Post Logs', link: '/api/post/logs.md' },
                { text: 'Post Log Detail', link: '/api/post/log-detail.md' },
                { text: 'Delete', link: '/api/post/delete.md' },
            ]
        },
        {
            text: 'Comment',
            collapsible: true,
            items: [
                { text: 'Comment List', link: '/api/comment/list.md' },
                { text: 'Comment Detail', link: '/api/comment/detail.md' },
                { text: 'Comment Interactive Users', link: '/api/comment/interactive.md' },
                { text: 'Comment Logs', link: '/api/comment/logs.md' },
                { text: 'Comment Log Detail', link: '/api/comment/log-detail.md' },
                { text: 'Delete', link: '/api/comment/delete.md' },
            ]
        },
        {
            text: 'Editor',
            collapsible: true,
            items: [
                { text: 'Direct Publish', link: '/api/editor/direct-publish.md' },
                { text: 'Editor Config', link: '/api/editor/config.md' },
                { text: 'Draft List', link: '/api/editor/drafts.md' },
                { text: 'Create Draft', link: '/api/editor/create.md' },
                { text: 'Generate Draft', link: '/api/editor/generate.md' },
                { text: 'Draft Detail', link: '/api/editor/detail.md' },
                { text: 'Update Draft', link: '/api/editor/update.md' },
                { text: 'Publish', link: '/api/editor/publish.md' },
                { text: 'Revoke', link: '/api/editor/revoke.md' },
                { text: 'Delete', link: '/api/editor/delete.md' },
            ]
        },
        {
            text: 'Search',
            collapsible: true,
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
            collapsible: true,
            items: [
                { text: 'Introduction', link: '/database/' },
                { text: 'Numbered Description', link: '/database/number.md' },
            ]
        },
        {
            text: 'Data Structure',
            collapsible: true,
            items: [
                {
                    text: 'Systems',
                    collapsible: true,
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
                    collapsible: true,
                    items: [
                        { text: 'plugins', link: '/database/plugins/plugins.md' },
                        { text: 'plugin_usages', link: '/database/plugins/plugin-usages.md' },
                        { text: 'plugin_badges', link: '/database/plugins/plugin-badges.md' },
                    ]
                },
                {
                    text: 'Accounts',
                    collapsible: true,
                    items: [
                        { text: 'accounts', link: '/database/accounts/accounts.md' },
                        { text: 'account_connects', link: '/database/accounts/account-connects.md' },
                        { text: 'account_wallets', link: '/database/accounts/account-wallets.md' },
                        { text: 'account_wallet_logs', link: '/database/accounts/account-wallet-logs.md' },
                    ]
                },
                {
                    text: 'Users',
                    collapsible: true,
                    items: [
                        { text: 'roles', link: '/database/users/roles.md' },
                        { text: 'users', link: '/database/users/users.md' },
                        { text: 'user_stats', link: '/database/users/user-stats.md' },
                        { text: 'user_roles', link: '/database/users/user-roles.md' },
                        { text: 'user_likes', link: '/database/users/user-likes.md' },
                        { text: 'user_follows', link: '/database/users/user-follows.md' },
                        { text: 'user_blocks', link: '/database/users/user-blocks.md' },
                    ]
                },
                {
                    text: 'Interactives',
                    collapsible: true,
                    items: [
                        { text: 'mentions', link: '/database/interactives/mentions.md' },
                        { text: 'notifies', link: '/database/interactives/notifies.md' },
                        { text: 'dialogs', link: '/database/interactives/dialogs.md' },
                        { text: 'dialog_messages', link: '/database/interactives/dialog-messages.md' },
                    ]
                },
                {
                    text: 'Extends',
                    collapsible: true,
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
                    collapsible: true,
                    items: [
                        { text: 'posts', link: '/database/contents/posts.md' },
                        { text: 'post_appends', link: '/database/contents/post-appends.md' },
                        { text: 'post_allows', link: '/database/contents/post-allows.md' },
                        { text: 'post_users', link: '/database/contents/post-users.md' },
                        { text: 'post_logs', link: '/database/contents/post-logs.md' },
                        { text: 'comments', link: '/database/contents/comments.md' },
                        { text: 'comment_appends', link: '/database/contents/comment-appends.md' },
                        { text: 'comment_logs', link: '/database/contents/comment-logs.md' },
                    ]
                },
                {
                    text: 'Content Category',
                    collapsible: true,
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
                    collapsible: true,
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
            collapsible: true,
            items: [
                { text: 'Platforms', link: '/database/dictionary/platforms.md' },
                { text: 'Connects', link: '/database/dictionary/connects.md' },
                { text: 'Storages', link: '/database/dictionary/storages.md' },
                { text: 'Maps', link: '/database/dictionary/maps.md' },
                { text: 'Continents', link: '/database/dictionary/continents.md' },
                { text: 'Area Codes', link: '/database/dictionary/area-codes.md' },
                { text: 'Language Codes', link: '/database/dictionary/language-codes.md' },
                { text: 'Currency Codes', link: '/database/dictionary/currency-codes.md' },
                { text: 'Timezone', link: '/database/dictionary/utc.md' },
                { text: 'Ban Names', link: '/database/dictionary/ban-names.md' },
                { text: 'Language Pack', link: '/database/dictionary/language-pack.md' },
            ]
        },
        {
            text: 'Config Key Name',
            collapsible: true,
            items: [
                { text: 'Introduction', link: '/database/keyname/index.md' },
                {
                    text: 'Dashboard',
                    collapsible: true,
                    items: [
                        { text: 'Settings', link: '/database/keyname/settings.md' },
                    ]
                },
                {
                    text: 'Systems',
                    collapsible: true,
                    items: [
                        { text: 'Languages', link: '/database/keyname/languages.md' },
                        { text: 'General', link: '/database/keyname/general.md' },
                        { text: 'Policy', link: '/database/keyname/policy.md' },
                        { text: 'Send', link: '/database/keyname/send.md' },
                        { text: 'User', link: '/database/keyname/user.md' },
                        { text: 'Wallet', link: '/database/keyname/wallet.md' },
                        { text: 'Storage', link: '/database/keyname/storage.md' },
                        { text: 'Maps', link: '/database/keyname/maps.md' },
                    ]
                },
                {
                    text: 'Operations',
                    collapsible: true,
                    items: [
                        { text: 'Rename', link: '/database/keyname/rename.md' },
                        { text: 'Interaction', link: '/database/keyname/interactive.md' },
                        { text: 'Publish', link: '/database/keyname/publish.md' },
                    ]
                },
                {
                    text: 'Expands',
                    collapsible: true,
                    items: [
                        { text: 'Content Handler', link: '/database/keyname/content-handler.md' },
                    ]
                },
                {
                    text: 'Clients',
                    collapsible: true,
                    items: [
                        { text: 'Menus', link: '/database/keyname/menus.md' },
                        { text: 'Columns', link: '/database/keyname/columns.md' },
                        { text: 'Paths', link: '/database/keyname/paths.md' },
                        { text: 'Language Packs', link: '/database/keyname/language-pack.md' },
                        { text: 'Website', link: '/database/keyname/website.md' },
                        { text: 'App', link: '/database/keyname/app.md' },
                    ]
                },
            ]
        },
        {
            text: 'Extend Config Key',
            collapsible: true,
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
            collapsible: true,
            items: [
                { text: 'Basic', link: '/supports/cmd-word/basic.md' },
                { text: 'Send', link: '/supports/cmd-word/send.md' },
                { text: 'Account', link: '/supports/cmd-word/account.md' },
                { text: 'User', link: '/supports/cmd-word/user.md' },
                { text: 'Wallet', link: '/supports/cmd-word/wallet.md' },
                { text: 'File', link: '/supports/cmd-word/file.md' },
                { text: 'Content', link: '/supports/cmd-word/content.md' },
                { text: 'Crontab', link: '/supports/cmd-word/crontab.md' },
            ]
        },
        {
            text: 'Helpers',
            collapsible: true,
            items: [
                { text: 'Config', link: '/supports/helpers/config.md' },
                { text: 'Language', link: '/supports/helpers/language.md' },
                { text: 'Plugin', link: '/supports/helpers/plugin.md' },
                { text: 'File', link: '/supports/helpers/file.md' },
                { text: 'Date', link: '/supports/helpers/date.md' },
                { text: 'Str', link: '/supports/helpers/str.md' },
                { text: 'Primary', link: '/supports/helpers/primary.md' },
                { text: 'Interactive', link: '/supports/helpers/interactive.md' },
            ]
        },
        {
            text: 'Utilities',
            collapsible: true,
            items: [
                { text: 'Config', link: '/supports/utilities/config.md' },
                { text: 'Extend', link: '/supports/utilities/extend.md' },
                { text: 'File', link: '/supports/utilities/file.md' },
                { text: 'Interactive', link: '/supports/utilities/interactive.md' },
                { text: 'Permission', link: '/supports/utilities/permission.md' },
                { text: 'Validation', link: '/supports/utilities/validation.md' },
            ]
        },
        {
            text: 'Models',
            collapsible: true,
            items: [
                { text: 'Dataset', link: '/supports/models/' },
            ]
        },
    ]
}

// sidebarCommunity
function sidebarCommunity() {
    return  [
        {
            text: 'About',
            collapsible: true,
            items: [
                { text: 'Teams', link: '/community/teams.md' },
                { text: 'Join', link: '/community/join.md' },
                { text: 'Sponsor', link: '/community/sponsor.md' },
            ]
        },
        {
            text: 'Contributing',
            collapsible: true,
            items: [
                { text: 'Guide', link: '/contributing/' },
                { text: 'Translations', link: '/contributing/translations.md' },
            ]
        },
        {
            text: 'Interactive',
            collapsible: true,
            items: [
                { text: 'Community', link: 'https://discuss.fresns.org' },
            ]
        },
    ]
}
