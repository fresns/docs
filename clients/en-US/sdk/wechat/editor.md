# Editor

## Component

- The SDK provides a fully encapsulated editor component, ready for direct usage or modification and refactoring.
- The editor component code resides in the `/sdk/editor/` directory.
- This editor component is built upon the `Skyline` rendering engine and styled with the [WeUI](https://github.com/Tencent/weui-wxss) library.

## Page

::: code-group
```js [index.js]
import { fresnsConfig, fresnsLang } from '../../sdk/helpers/configs';

Page({
  /** External mixins import **/
  mixins: [
    require('../../mixins/common'),
  ],

  /** Initial data for the page **/
  data: {
    title: null,
    draftType: 'post',
    draftOptions: null,
    did: null,
    fsid: null,
  },

  /** Lifecycle function triggered upon page load **/
  onLoad: async function (options) {
    const title = await fresnsLang('editor');

    const draftType = options.type || 'post';

    const draftOptions = {
      commentPid: options.commentPid || null, // Specific for comments | Set if commenting on a post
      commentCid: options.commentCid || null, // Specific for comments | Set if replying to a comment
      quotePid: options.quotePid || null, // Specific for posts | Quoting a post
      gid: options.gid || null, // Specific for posts
      title: options.title || null, // Specific for posts
      content: options.content || null,
      isMarkdown: options.isMarkdown || null,
      isAnonymous: options.isAnonymous || null,
      commentPolicy: options.commentPolicy || null, // Specific for posts
      commentPrivate: options.content || null,
      gtid: options.isMarkdown || null,
      locationInfo: options.locationInfo || null,
    };

    const did = options.did || null;
    const fsid = options.fsid || null;

    const editorService = await fresnsConfig(`${draftType}_editor_service`);

    // If an editor plugin is configured, redirect to the plugin page
    if (editorService) {
      // Extended Web-View data
      const navigatorData = {
        title: title,
        url: editorService,
        draftType: draftType,
        draftOptions: JSON.stringify(draftOptions),
        did: did,
        pid: draftType == 'post' ? fsid : '', // Set if editing a post
        cid: draftType == 'comment' ? fsid : '', // Set if editing a comment
        postMessageKey: 'fresnsEditor',
      };

      // Assign link data to global data
      const app = getApp();
      app.globalData.navigatorData = navigatorData;

      // Navigate to the extended plugin page
      wx.redirectTo({
        url: '/sdk/extensions/webview',
      });

      return;
    }

    // If no editor plugin configured, load the default editor page
    this.setData({
      title: title,
      draftType: draftType,
      draftOptions: draftOptions,
      did: did,
      fsid: fsid,
    });
  },
});
```

```json [index.json]
{
  "navigationBarTitleText": "Editor",
  "usingComponents": {
    "navigation-bar": "/components/commons/navigation-bar/navigation-bar",
    "editor": "/sdk/editor/editor" // SDK Editor Component
  }
}
```

```html [index.wxml]
<navigation-bar title="{{title}}" backButton="{{true}}"></navigation-bar>

<scroll-view class="scrollarea" type="list" scroll-y="{{true}}">
  <editor type="{{draftType}}" options="{{draftOptions}}" did="{{did}}" fsid="{{fsid}}"></editor>
</scroll-view>
```

```css [index.wxss]
@import '/style/weui.wxss';

.scrollarea {
  flex: 1;
  overflow-y: hidden;
  background-color: var(--weui-BG-1);
}
```
:::

## Usage Guidelines

- When using the editor page, avoid implementing the [callback handling](extensions.md#callback-handling) feature, as the editor component itself includes internal callback logic that could lead to conflicts.
- The editor page must verify if an [editor service](../../reference/configs.md#publish) is defined. If it is, redirect the user to the extension plugin page provided by the plugin to deliver the editor functionality.
