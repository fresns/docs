import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/clients/',
  lang: 'en-US',
  title: 'Fresns Clients Development Documentation',
  titleTemplate: false,
  description: 'Develop client applications with Fresns unified and standardized APIs. Craft applications suited for various environments with a single development effort, ensuring compatibility and developer efficiency.',

  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://files.fresns.org/wiki/icons/fresns.png' }],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en-US'
    },
    en: {
      label: '简体中文',
      lang: 'zh-Hans',
      link: 'https://docs.fresns.com/zh-Hans/clients'
    }
  },

  themeConfig: {
    siteTitle: 'Fresns Docs',
    logo: 'https://files.fresns.org/wiki/icons/fresns.png',
    nav: [
        { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
        { text: 'API', link: '/api/', activeMatch: '/api/' },
        { text: 'Reference', link: '/reference/', activeMatch: '/reference/' },
        { text: 'Theme', link: '/theme/', activeMatch: '/theme/' },
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
      '/api/': sidebarApi(),
      '/reference/': sidebarReference(),
      '/theme/': sidebarTheme(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fresns' }
    ],

    footer: {
      message: 'Released under the Apache-2.0 License',
      copyright: 'Copyright © 2021-2023 <a href="https://github.com/jevantang" target="_blank">Jevan Tang</a>',
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
        { text: 'Resources', link: '/guide/resources.md' },
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
        { text: 'Code Messages', link: '/api/global/code-messages.md' },
        { text: 'Language Pack', link: '/api/global/language-pack.md' },
        { text: 'Extend Channels', link: '/api/global/channels.md' },
        { text: 'Extend Archives', link: '/api/global/archives.md' },
        { text: 'Storage Token', link: '/api/global/storage-token.md' },
        { text: 'User Roles', link: '/api/global/roles.md' },
        { text: 'Content Types', link: '/api/global/content-types.md' },
        { text: 'Stickers', link: '/api/global/stickers.md' },
      ]
    },
    {
      text: 'Common',
      collapsed: false,
      items: [
        { text: 'IP Information', link: '/api/common/ip-info.md' },
        { text: 'Input Tips', link: '/api/common/input-tips.md' },
        { text: 'App or Plugin Callback', link: '/api/common/callback.md' },
        { text: 'Update Device Token', link: '/api/common/update-device-token.md' },
        { text: 'Command Word Request', link: '/api/common/cmd-word.md' },
        { text: 'Extend Action Request', link: '/api/common/extend-action.md' },
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
        { text: 'Login', link: '/api/account/login.md' },
        { text: 'Account Detail', link: '/api/account/detail.md' },
        { text: 'Wallet Records', link: '/api/account/wallet-records.md' },
        { text: 'Logout', link: '/api/account/logout.md' },
      ]
    },
    {
      text: 'User',
      collapsed: false,
      items: [
        {
          text: 'Function',
          items: [
            { text: 'Auth', link: '/api/user/auth.md' },
            { text: 'Overview', link: '/api/user/overview.md' },
            { text: 'Extcredits Records', link: '/api/user/extcredits-records.md' },
            { text: 'Edit', link: '/api/user/edit.md' },
            { text: 'Mark', link: '/api/user/mark.md' },
            { text: 'Mark Note', link: '/api/user/mark-note.md' },
          ]
        },
        {
          text: 'Interactive',
          items: [
            { text: 'User List', link: '/api/user/list.md' },
            { text: 'User Detail', link: '/api/user/detail.md' },
            { text: 'Followers You Know', link: '/api/user/followers-you-follow.md' },
            { text: 'User Interaction Users', link: '/api/user/interaction.md' },
            { text: 'User Mark List', link: '/api/user/mark-list.md' },
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
            { text: 'Mark As Read', link: '/api/message/notification-read.md' },
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
            { text: 'Mark As Read', link: '/api/message/conversation-read.md' },
            { text: 'Send Message', link: '/api/message/conversation-send.md' },
            { text: 'Delete Conversation or Messages', link: '/api/message/conversation-delete.md' },
          ]
        },
      ]
    },
    {
      text: 'Group',
      collapsed: false,
      items: [
        { text: 'Group Tree List', link: '/api/group/tree.md' },
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
      text: 'Geotag',
      collapsed: false,
      items: [
        { text: 'Geotag List', link: '/api/geotag/list.md' },
        { text: 'Geotag Detail', link: '/api/geotag/detail.md' },
        { text: 'Geotag Interaction Users', link: '/api/geotag/interaction.md' },
      ]
    },
    {
      text: 'Post',
      collapsed: false,
      items: [
        { text: 'Post List', link: '/api/post/list.md' },
        { text: 'Post List by Timelines', link: '/api/post/timelines.md' },
        { text: 'Post List by Nearby', link: '/api/post/nearby.md' },
        { text: 'Post Detail', link: '/api/post/detail.md' },
        { text: 'Post Interaction Users', link: '/api/post/interaction.md' },
        { text: 'Post Affiliated Users', link: '/api/post/users.md' },
        { text: 'Post Quote It List', link: '/api/post/quotes.md' },
        { text: 'Post Histories', link: '/api/post/histories.md' },
        { text: 'Post History Detail', link: '/api/post/history-detail.md' },
        { text: 'Delete', link: '/api/post/delete.md' },
      ]
    },
    {
      text: 'Comment',
      collapsed: false,
      items: [
        { text: 'Comment List', link: '/api/comment/list.md' },
        { text: 'Comment List by Timelines', link: '/api/comment/timelines.md' },
        { text: 'Comment List by Nearby', link: '/api/comment/nearby.md' },
        { text: 'Comment Detail', link: '/api/comment/detail.md' },
        { text: 'Comment Interaction Users', link: '/api/comment/interaction.md' },
        { text: 'Comment Histories', link: '/api/comment/histories.md' },
        { text: 'Comment History Detail', link: '/api/comment/history-detail.md' },
        { text: 'Delete', link: '/api/comment/delete.md' },
      ]
    },
    {
      text: 'Editor',
      collapsed: false,
      items: [
        { text: 'Quick Publish', link: '/api/editor/quick-publish.md' },
        { text: 'Editor Configs', link: '/api/editor/configs.md' },
        { text: 'Draft List', link: '/api/editor/drafts.md' },
        { text: 'Create Draft', link: '/api/editor/create.md' },
        { text: 'Generate Draft', link: '/api/editor/generate.md' },
        { text: 'Draft Detail', link: '/api/editor/detail.md' },
        { text: 'Update Draft', link: '/api/editor/update.md' },
        { text: 'Submit Publish', link: '/api/editor/publish.md' },
        { text: 'Recall (Draft under review)', link: '/api/editor/recall.md' },
        { text: 'Delete Draft', link: '/api/editor/delete.md' },
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

// sidebarReference
function sidebarReference() {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'Introduction', link: '/reference/' },
        { text: 'Headers', link: '/reference/headers.md' },
        { text: 'Cache', link: '/reference/cache.md' },
        { text: 'Error Codes', link: '/reference/error-codes.md' },
        { text: 'Language Pack', link: '/reference/language-pack.md' },
        { text: 'Global Configs', link: '/reference/configs.md' },
        {
          text: 'Dictionary Data',
          collapsed: false,
          items: [
            { text: 'Platforms', link: '/reference/dictionary/platforms.md' },
            { text: 'Connects', link: '/reference/dictionary/connects.md' },
            { text: 'Maps', link: '/reference/dictionary/maps.md' },
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
      ]
    }
  ]
}

// sidebarTheme
function sidebarTheme() {
  return [
    {
      text: 'Theme',
      items: [
        { text: 'Introduction', link: '/theme/' },
        { text: 'Structure', link: '/theme/structure.md' },
        { text: 'Template Tags', link: '/theme/tags.md' },
        { text: 'Theme Functions', link: '/theme/functions.md' },
      ]
    }
  ]
}
