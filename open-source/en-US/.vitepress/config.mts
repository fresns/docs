import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/open-source/',
  lang: 'en-US',
  title: 'Fresns Extensions',
  titleTemplate: false,
  description: 'Utilize the open-source potential of Fresns to extend and fortify its core capabilities. Our framework offers developers the flexibility to enhance the community experience and add personalized functionality.',

  lastUpdated: true,

  cleanUrls: false,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://files.fresns.org/wiki/icons/fresns.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Fresns' }],
    ['meta', { property: 'og:description', content: 'Cross-platform general-purpose multiple content forms social network service software' }],
    ['meta', { property: 'og:image', content: 'https://files.fresns.org/docs/images/og-image.jpg' }],
    ['meta', { property: 'og:url', content: 'https://docs.fresns.com/open-source/' }],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
    },
    'zh-Hans': {
      label: '简体中文',
      lang: 'zh-Hans',
      link: 'https://docs.fresns.com/zh-Hans/open-source'
    }
  },

  themeConfig: {
    siteTitle: 'Fresns Docs',
    logo: 'https://files.fresns.org/wiki/icons/fresns.png',
    nav: [
      { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
      { text: 'Extensions', link: '/extensions/', activeMatch: '/extensions/' },
      { text: 'Database', link: '/database/', activeMatch: '/database/' },
      { text: 'Configs', link: '/configs/', activeMatch: '/configs/' },
      {
        text: 'Supports',
        items: [
          { text: 'Cmd Words', link: '/supports/cmd-words/basic.md' },
          { text: 'Helpers', link: '/supports/helpers/config.md' },
          { text: 'Utilities', link: '/supports/utilities/config.md' },
          { text: 'Models', link: '/supports/models/' },
        ],
        activeMatch: '/supports/',
      },
      {
        text: 'Ecosystem',
        items: [
          { text: 'Community', link: 'https://space.fresns.com/developers' },
          { text: 'Developers', link: 'https://developers.fresns.com/' },
          { text: 'Marketplace', link: 'https://marketplace.fresns.com/' },
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
  }
})

// sidebarGuide
function sidebarGuide() {
  return [
    {
      text: 'Guide',
      items: [
        { text: 'Introduction', link: '/guide/' },
        { text: 'Using', link: '/guide/using.md' },
        { text: 'Product Idea', link: '/guide/idea.md' },
      ]
    }
  ]
}

// sidebarExtensions
function sidebarExtensions() {
  return [
    {
      text: 'Extensions',
      items: [
        { text: 'Introduction', link: '/extensions/' },
        { text: 'Artisan', link: '/extensions/artisan.md' },
        { text: 'Command Word', link: '/extensions/command-word.md' },
        { text: 'Error Code', link: '/extensions/error-code.md' },
        { text: 'Multilingual', link: '/extensions/multilingual.md' },
        {
          text: 'Function Reference',
          items: [
            { text: 'Crontab and Subscribe', link: '/extensions/functions.md' },
            { text: 'Command Word Dev', link: '/extensions/command-word-dev.md' },
            { text: 'Verify Access Token', link: '/extensions/verify-access-token.md' },
          ]
        },
        {
          text: 'Plugin Reference',
          items: [
            { text: 'Storage', link: '/extensions/storage.md' },
            { text: 'Editor', link: '/extensions/editor.md' },
            { text: 'Content Handler', link: '/extensions/content-handler.md' },
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
        text: 'Overview',
        items: [
          { text: 'Introduction', link: '/database/' },
          { text: 'Numbered Description', link: '/database/numbered-description.md' },
        ]
      },
      {
        text: 'Systems',
        collapsed: false,
        items: [
          { text: 'configs', link: '/database/systems/configs.md' },
          { text: 'code_messages', link: '/database/systems/code-messages.md' },
          { text: 'language_packs', link: '/database/systems/language-packs.md' },
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
        text: 'Apps',
        collapsed: false,
        items: [
          { text: 'apps', link: '/database/apps/apps.md' },
          { text: 'app_callbacks', link: '/database/apps/app-callbacks.md' },
          { text: 'app_usages', link: '/database/apps/app-usages.md' },
          { text: 'app_badges', link: '/database/apps/app-badges.md' },
        ]
      },
      {
        text: 'Accounts',
        collapsed: false,
        items: [
          { text: 'accounts', link: '/database/accounts/accounts.md' },
          { text: 'account_connects', link: '/database/accounts/account-connects.md' },
          { text: 'account_wallets', link: '/database/accounts/account-wallets.md' },
          { text: 'account_wallet_logs', link: '/database/accounts/account-wallet-logs.md' },
        ]
      },
      {
        text: 'Users',
        collapsed: false,
        items: [
          { text: 'roles', link: '/database/users/roles.md' },
          { text: 'users', link: '/database/users/users.md' },
          { text: 'user_stats', link: '/database/users/user-stats.md' },
          { text: 'user_extcredits_logs', link: '/database/users/user-extcredits-logs.md' },
          { text: 'user_roles', link: '/database/users/user-roles.md' },
          { text: 'user_likes', link: '/database/users/user-likes.md' },
          { text: 'user_follows', link: '/database/users/user-follows.md' },
        ]
      },
      {
        text: 'Interactions',
        collapsed: false,
        items: [
          { text: 'mentions', link: '/database/interactions/mentions.md' },
          { text: 'notifications', link: '/database/interactions/notifications.md' },
          { text: 'conversations', link: '/database/interactions/conversations.md' },
          { text: 'conversation_messages', link: '/database/interactions/conversation-messages.md' },
        ]
      },
      {
        text: 'Content',
        collapsed: false,
        items: [
          { text: 'posts', link: '/database/contents/posts.md' },
          { text: 'post_auths', link: '/database/contents/post-auths.md' },
          { text: 'post_users', link: '/database/contents/post-users.md' },
          { text: 'post_logs', link: '/database/contents/post-logs.md' },
          { text: 'comments', link: '/database/contents/comments.md' },
          { text: 'comment_logs', link: '/database/contents/comment-logs.md' },
        ]
      },
      {
        text: 'Content Category',
        collapsed: false,
        items: [
          { text: 'groups', link: '/database/contents/groups.md' },
          { text: 'group_admins', link: '/database/contents/group-admins.md' },
          { text: 'hashtags', link: '/database/contents/hashtags.md' },
          { text: 'hashtag_usages', link: '/database/contents/hashtag-usages.md' },
          { text: 'geotags', link: '/database/contents/geotags.md' },
          { text: 'geotag_usages', link: '/database/contents/geotag-usages.md' },
          { text: 'domains', link: '/database/contents/domains.md' },
          { text: 'domain_links', link: '/database/contents/domain-links.md' },
          { text: 'domain_link_usages', link: '/database/contents/domain-link-usages.md' },
        ]
      },
      {
        text: 'Content Configuration',
        collapsed: false,
        items: [
          { text: 'archives', link: '/database/extends/archives.md' },
          { text: 'archive_usages', link: '/database/extends/archive-usages.md' },
          { text: 'operations', link: '/database/extends/operations.md' },
          { text: 'operation_usages', link: '/database/extends/operation-usages.md' },
          { text: 'extends', link: '/database/extends/extends.md' },
          { text: 'extend_usages', link: '/database/extends/extend-usages.md' },
          { text: 'extend_users', link: '/database/extends/extend-users.md' },
          { text: 'stickers', link: '/database/extends/stickers.md' },
          { text: 'seo', link: '/database/extends/seo.md' },
        ]
      }
  ]
}

// sidebarConfigs
function sidebarConfigs() {
  return [
    {
      text: 'Dictionary Data',
      items: [
        { text: 'Platforms', link: '/configs/dictionary/platforms.md' },
        { text: 'Connects', link: '/configs/dictionary/connects.md' },
        { text: 'Maps', link: '/configs/dictionary/maps.md' },
        { text: 'Continents', link: '/configs/dictionary/continents.md' },
        { text: 'Area Codes', link: '/configs/dictionary/area-codes.md' },
        { text: 'Language Codes', link: '/configs/dictionary/language-codes.md' },
        { text: 'Currency Codes', link: '/configs/dictionary/currency-codes.md' },
        { text: 'Timezone', link: '/configs/dictionary/timezone.md' },
      ]
    },
    {
      text: 'Fresns Panel',
      items: [
        {
          text: 'Dashboard',
          collapsed: false,
          items: [
            { text: 'Events', link: '/configs/panel/events.md' },
            { text: 'Settings', link: '/configs/panel/settings.md' },
          ]
        },
        {
          text: 'Systems',
          collapsed: false,
          items: [
            { text: 'Languages', link: '/configs/panel/languages.md' },
            { text: 'Storage', link: '/configs/panel/storage.md' },
            { text: 'General', link: '/configs/panel/general.md' },
            { text: 'Policy', link: '/configs/panel/policy.md' },
            { text: 'Send', link: '/configs/panel/send.md' },
            { text: 'Account', link: '/configs/panel/account.md' },
            { text: 'Wallet', link: '/configs/panel/wallet.md' },
          ]
        },
        {
          text: 'Operations',
          collapsed: false,
          items: [
            { text: 'User', link: '/configs/panel/user.md' },
            { text: 'Content', link: '/configs/panel/content.md' },
            { text: 'Interaction', link: '/configs/panel/interaction.md' },
            { text: 'Publish', link: '/configs/panel/publish.md' },
          ]
        },
        {
          text: 'Extends',
          collapsed: false,
          items: [
            { text: 'Content Handler', link: '/configs/panel/content-handler.md' },
            { text: 'Command Words', link: '/configs/panel/command-word.md' },
          ]
        },
        {
          text: 'Clients',
          collapsed: false,
          items: [
            { text: 'Channels', link: '/configs/panel/channels.md' },
            { text: 'Paths', link: '/configs/panel/paths.md' },
            { text: 'Language Packs', link: '/configs/panel/language-packs.md' },
            { text: 'Basic', link: '/configs/panel/basic.md' },
          ]
        },
        {
          text: 'App Center',
          collapsed: false,
          items: [
            { text: 'Themes', link: '/configs/panel/themes.md' },
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
      text: 'Command Words',
      collapsed: false,
      items: [
        { text: 'Basic', link: '/supports/cmd-words/basic.md' },
        { text: 'Send', link: '/supports/cmd-words/send.md' },
        { text: 'Account', link: '/supports/cmd-words/account.md' },
        { text: 'User', link: '/supports/cmd-words/user.md' },
        { text: 'Wallet', link: '/supports/cmd-words/wallet.md' },
        { text: 'File', link: '/supports/cmd-words/file.md' },
        { text: 'Content', link: '/supports/cmd-words/content.md' },
        { text: 'Detail', link: '/supports/cmd-words/detail.md' },
        { text: 'Manage', link: '/supports/cmd-words/manage.md' },
        { text: 'Crontab', link: '/supports/cmd-words/crontab.md' },
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
