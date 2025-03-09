# App Extensions

- Refer to [Extension Callback Usage](../../reference/callback/)

## Initial Configuration

- Add an extension page (Web-View component) to your `app.json`

```json
{
  "pages": [
    "sdk/extensions/webview"
  ]
}
```

- Import the extension mixins into each page's JavaScript `Page` object:

```js
mixins: [
  require('/sdk/extensions/functions'),
],
```

## Page Implementation

**Insert the navigation link at the appropriate location for each scenario.**

- Link-based Navigation

```html
<!-- Assign link data to global state using handleExtensionTap -->
<navigator url="/sdk/extensions/webview"
  bind:tap="handleExtensionTap" 
  data-title="Fresns Manage"
  data-url="{{appUrl}}"
  data-pid="{{post.pid}}"
  data-uid="{{post.author.uid}}"
  data-post-message-key="fresnsPostManage">
  Manage
</navigator>
```

- Menu-based Navigation

```js
// Extension Web-View Data
const navigatorData = {
  title: 'Fresns Manage',
  url: appUrl,
  pid: post.pid,
  uid: post.author.uid,
  postMessageKey: 'fresnsPostManage',
};

// Assign navigation data to global state
const app = getApp();
app.globalData.navigatorData = navigatorData;

// Navigate to the extension page
wx.navigateTo({
  url: '/sdk/extensions/webview',
});
```

## Navigation Handling

`web-view`

[https://github.com/fresns/client-wechat/tree/3.x/sdk/extensions/webview.js](https://github.com/fresns/client-wechat/tree/3.x/sdk/extensions/webview.js)

- The SDK-packaged `Web View` page automatically handles the navigation links and listens for callback messages.
- Callback messages are stored under the key `fresnsCallbackMessage`.

## Callback Handling

`postMessage`

[https://github.com/fresns/client-wechat/tree/3.x/mixins/fresnsCallback.js](https://github.com/fresns/client-wechat/tree/3.x/mixins/fresnsCallback.js)

```js
mixins: [
  require('/mixins/fresnsCallback'),
],
```

- Import the extension mixins into each page’s JavaScript `Page` object.
- This JS module, which you define yourself, reads and processes stored callback messages.
- For the structure of callback messages, refer to [postMessage Documentation](../../reference/callback/index.md#postmessage-intro).
- After interpreting and handling the callback messages, clear them from storage.
