import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/clients/',
  lang: 'en-US',
  title: 'Fresns Clients Development Documentation',
  titleTemplate: false,
  description: 'Develop client applications with Fresns unified and standardized APIs. Craft applications suited for various environments with a single development effort, ensuring compatibility and developer efficiency.',

  lastUpdated: true,

  cleanUrls: false,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://assets.fresns.com/images/icons/fresns.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Fresns' }],
    ['meta', { property: 'og:description', content: 'Cross-platform general-purpose multiple content forms social network service software' }],
    ['meta', { property: 'og:url', content: 'https://docs.fresns.com/clients/' }],
    ['meta', { property: 'og:image', content: 'https://assets.fresns.com/images/wikis/open-graph/open-source.jpg' }],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en-US'
    },
    en: {
      label: '简体中文',
      lang: 'zh-Hans',
      link: 'https://docs.fresns.com/zh-hans/clients/'
    }
  },

  themeConfig: {
    siteTitle: 'Fresns Docs',
    logo: 'https://assets.fresns.com/images/icons/fresns.png',
    nav: [
        { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
        { text: 'API', link: '/api/', activeMatch: '/api/' },
        { text: 'Reference', link: '/reference/', activeMatch: '/reference/' },
        { text: 'SDK', link: '/sdk/', activeMatch: '/sdk/' },
        {
          text: 'Ecosystem',
          items: [
            { text: 'Community', link: 'https://discuss.fresns.org/' },
            { text: 'Marketplace', link: 'https://marketplace.fresns.com/' },
            { text: 'Developer Platform', link: 'https://developer.fresns.com/' },
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
      copyright: 'Copyright © 2021-2025 <a href="https://github.com/jevantang" target="_blank">Jevan Tang</a>',
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
        { text: 'Product Idea', link: '/guide/idea.md' },
        { text: 'Directions', link: '/guide/directions.md' },
        { text: 'Release Notes', link: '/guide/changelog.md' },
      ]
    }
  ]
}

// sidebarApi
function sidebarApi() {
  return [
    { text: 'API Overview', link: '/api/' },
    {
      text: 'Global',
      collapsed: false,
      items: [
        { text: 'Client Status', link: '/api/global/status.md' },
        { text: 'Configs', link: '/api/global/configs.md' },
        { text: 'Language Pack', link: '/api/global/language-pack.md' },
        { text: 'Extend Channels', link: '/api/global/channels.md' },
        { text: 'Extend Archives', link: '/api/global/archives.md' },
        { text: 'Content Types', link: '/api/global/content-types.md' },
        { text: 'User Roles', link: '/api/global/roles.md' },
        { text: 'Stickers', link: '/api/global/stickers.md' },
      ]
    },
    {
      text: 'Common',
      collapsed: false,
      items: [
        { text: 'IP Information', link: '/api/common/ip-info.md' },
        { text: 'Input Tips', link: '/api/common/input-tips.md' },
        { text: 'Command Word Request', link: '/api/common/cmd-word.md' },
        { text: 'File: Make S3 Upload Token', link: '/api/common/file-upload-token.md' },
        { text: 'File: Upload', link: '/api/common/file-upload.md' },
        { text: 'File: Update Info', link: '/api/common/file-update.md' },
        { text: 'File: Download Link', link: '/api/common/file-link.md' },
        { text: 'File: Download Users', link: '/api/common/file-users.md' },
      ]
    },
    {
      text: 'Account',
      collapsed: false,
      items: [
        { text: 'Login', link: '/api/account/login.md' },
        { text: 'Logout', link: '/api/account/logout.md' },
        { text: 'Account Detail', link: '/api/account/detail.md' },
        { text: 'Wallet Records', link: '/api/account/wallet-records.md' },
      ]
    },
    {
      text: 'User',
      collapsed: false,
      items: [
        {
          text: 'Function',
          items: [
            { text: 'Login', link: '/api/user/login.md' },
            { text: 'Overview', link: '/api/user/overview.md' },
            { text: 'Extcredits Records', link: '/api/user/extcredits-records.md' },
            { text: 'Update Profile', link: '/api/user/update-profile.md' },
            { text: 'Update Setting', link: '/api/user/update-setting.md' },
            { text: 'Mark', link: '/api/user/mark.md' },
            { text: 'Update Mark Note', link: '/api/user/mark-note.md' },
            { text: 'Extend Action', link: '/api/user/extend-action.md' },
          ]
        },
        {
          text: 'Interactive',
          items: [
            { text: 'List', link: '/api/user/list.md' },
            { text: 'Detail', link: '/api/user/detail.md' },
            { text: 'Followers You Know', link: '/api/user/followers-you-follow.md' },
            { text: 'Interaction Users', link: '/api/user/interaction.md' },
            { text: 'Mark List', link: '/api/user/mark-list.md' },
          ]
        },
      ]
    },
    {
      text: 'Message',
      collapsed: false,
      items: [
        {
          text: 'Notification',
          items: [
            { text: 'List', link: '/api/message/notification-list.md' },
            { text: 'Read', link: '/api/message/notification-read.md' },
            { text: 'Delete', link: '/api/message/notification-delete.md' },
          ]
        },
        {
          text: 'Conversation',
          items: [
            { text: 'List', link: '/api/message/conversation-list.md' },
            { text: 'Detail', link: '/api/message/conversation-detail.md' },
            { text: 'Messages', link: '/api/message/conversation-messages.md' },
            { text: 'Pin Conversation', link: '/api/message/conversation-pin.md' },
            { text: 'Read', link: '/api/message/conversation-read.md' },
            { text: 'Delete', link: '/api/message/conversation-delete.md' },
            { text: 'Send Message', link: '/api/message/conversation-send.md' },
          ]
        },
      ]
    },
    {
      text: 'Group',
      collapsed: false,
      items: [
        { text: 'Tree List', link: '/api/group/tree.md' },
        { text: 'List', link: '/api/group/list.md' },
        { text: 'Detail', link: '/api/group/detail.md' },
        { text: 'Creator', link: '/api/group/creator.md' },
        { text: 'Admins', link: '/api/group/admins.md' },
        { text: 'Interaction Users', link: '/api/group/interaction.md' },
      ]
    },
    {
      text: 'Hashtag',
      collapsed: false,
      items: [
        { text: 'List', link: '/api/hashtag/list.md' },
        { text: 'Detail', link: '/api/hashtag/detail.md' },
        { text: 'Interaction Users', link: '/api/hashtag/interaction.md' },
      ]
    },
    {
      text: 'Geotag',
      collapsed: false,
      items: [
        { text: 'List', link: '/api/geotag/list.md' },
        { text: 'Detail', link: '/api/geotag/detail.md' },
        { text: 'Interaction Users', link: '/api/geotag/interaction.md' },
      ]
    },
    {
      text: 'Post',
      collapsed: false,
      items: [
        { text: 'List', link: '/api/post/list.md' },
        { text: 'List by Timelines', link: '/api/post/timelines.md' },
        { text: 'List by Nearby', link: '/api/post/nearby.md' },
        { text: 'Detail', link: '/api/post/detail.md' },
        { text: 'Interaction Users', link: '/api/post/interaction.md' },
        { text: 'Associated Users', link: '/api/post/users.md' },
        { text: 'Quote It List', link: '/api/post/quotes.md' },
        { text: 'Histories', link: '/api/post/histories.md' },
        { text: 'History Detail', link: '/api/post/history-detail.md' },
        { text: 'Delete', link: '/api/post/delete.md' },
      ]
    },
    {
      text: 'Comment',
      collapsed: false,
      items: [
        { text: 'List', link: '/api/comment/list.md' },
        { text: 'List by Timelines', link: '/api/comment/timelines.md' },
        { text: 'List by Nearby', link: '/api/comment/nearby.md' },
        { text: 'Detail', link: '/api/comment/detail.md' },
        { text: 'Interaction Users', link: '/api/comment/interaction.md' },
        { text: 'Histories', link: '/api/comment/histories.md' },
        { text: 'History Detail', link: '/api/comment/history-detail.md' },
        { text: 'Delete', link: '/api/comment/delete.md' },
      ]
    },
    {
      text: 'Editor',
      collapsed: false,
      items: [
        { text: 'Editor Configs', link: '/api/editor/configs.md' },
        { text: 'Quick Publish', link: '/api/editor/publish.md' },
        { text: 'Edit Post or Comment', link: '/api/editor/edit.md' },
        { text: 'Draft: Create', link: '/api/editor/draft-create.md' },
        { text: 'Draft: List', link: '/api/editor/draft-list.md' },
        { text: 'Draft: Detail', link: '/api/editor/draft-detail.md' },
        { text: 'Draft: Update', link: '/api/editor/draft-update.md' },
        { text: 'Draft: Submit Publish', link: '/api/editor/draft-publish.md' },
        { text: 'Draft: Recall', link: '/api/editor/draft-recall.md' },
        { text: 'Draft: Delete', link: '/api/editor/draft-delete.md' },
      ]
    },
    {
      text: 'Search',
      collapsed: false,
      items: [
        { text: 'Users', link: '/api/search/users.md' },
        { text: 'Groups', link: '/api/search/groups.md' },
        { text: 'Hashtags', link: '/api/search/hashtags.md' },
        { text: 'Geotags', link: '/api/search/geotags.md' },
        { text: 'Posts', link: '/api/search/posts.md' },
        { text: 'Comments', link: '/api/search/comments.md' },
      ]
    },
  ]
}

// sidebarReference
function sidebarReference() {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'Introduction', link: '/reference/' },
        { text: 'Error Codes', link: '/reference/error-codes.md' },
        { text: 'Headers', link: '/reference/headers.md' },
        { text: 'Login', link: '/reference/login.md' },
        {
          text: 'Global Configs',
          collapsed: false,
          items: [
            { text: 'Config Items', link: '/reference/configs.md' },
            { text: 'Language Pack', link: '/reference/language-pack.md' },
            { text: 'Cache', link: '/reference/cache.md' },
          ]
        },
        {
          text: 'Common Data Structure',
          collapsed: false,
          items: [
            { text: 'Account', link: '/reference/data/account.md' },
            { text: 'User', link: '/reference/data/user.md' },
            { text: 'Group', link: '/reference/data/group.md' },
            { text: 'Hashtag', link: '/reference/data/hashtag.md' },
            { text: 'Geotag', link: '/reference/data/geotag.md' },
            { text: 'Post', link: '/reference/data/post.md' },
            { text: 'Comment', link: '/reference/data/comment.md' },
            { text: 'Draft', link: '/reference/data/draft.md' },
            { text: 'File', link: '/reference/data/file.md' },
            { text: 'Extends', link: '/reference/data/extends.md' },
          ]
        },
        {
          text: 'Callback',
          collapsed: false,
          items: [
            { text: 'Usage', link: '/reference/callback/' },
            { text: 'Path Variables', link: '/reference/callback/variables.md' },
            { text: 'Make Access Token', link: '/reference/callback/access-token.md' },
          ]
        },
        {
          text: 'Dictionary Data',
          collapsed: false,
          items: [
            { text: 'Platforms', link: '/reference/dictionary/platforms.md' },
            { text: 'Maps', link: '/reference/dictionary/maps.md' },
          ]
        },
      ]
    }
  ]
}

// sidebarSdk
function sidebarSdk() {
  return [
    { text: 'Resources', link: '/sdk/' },
    {
      text: 'Theme',
      items: [
        { text: 'Introduction', link: '/sdk/theme/' },
        { text: 'Structure', link: '/sdk/theme/structure.md' },
        { text: 'API', link: '/sdk/theme/api.md' },
        { text: 'Functions', link: '/sdk/theme/functions.md' },
        { text: 'App Extensions', link: '/sdk/theme/extensions.md' },
        { text: 'Theme Settings', link: '/sdk/theme/settings.md' },
      ]
    }
  ]
}
