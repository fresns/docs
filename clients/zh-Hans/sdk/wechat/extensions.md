# 插件扩展

- 参见 [扩展回调使用](../../reference/callback/)

## 初始配置

- 在 `app.json` 中添加扩展页面（Web-View 组件）

```json
{
  "pages": [
    "sdk/extensions/webview"
  ]
}
```

- 在每个页面的 JS 文件 `Page` 中引入扩展 mixins 代码

```js
mixins: [
  require('/sdk/extensions/functions'),
],
```

## 页面代码

**在对应场景的位置添置访问链接**

- 链接方式

```html
<!-- 通过函数 handleExtensionTap 将链接数据赋予到全局数据中 -->
<navigator url="/sdk/extensions/webview"
  bind:tap="handleExtensionTap" 
  data-title="Fresns Manage"
  data-url="{{appUrl}}"
  data-pid="{{post.pid}}"
  data-uid="{{post.author.uid}}"
  data-post-message-key="fresnsPostManage">
  管理
</navigator>
```

- 菜单方式

```js
// 扩展 Web-View 数据
const navigatorData = {
  title: 'Fresns Manage',
  url: appUrl,
  pid: post.pid,
  uid: post.author.uid,
  postMessageKey: 'fresnsPostManage',
};

// 将链接数据赋予到全局数据中
const app = getApp();
app.globalData.navigatorData = navigatorData;

// 访问扩展页面
wx.navigateTo({
  url: '/sdk/extensions/webview',
});
```

## 访问处理

`web-view`

[https://github.com/fresns/client-wechat/tree/3.x/sdk/extensions/webview.js](https://github.com/fresns/client-wechat/tree/3.x/sdk/extensions/webview.js)

- SDK 封装的 `Web View` 页面将自动处理访问链接并监听回调消息。
- 回调消息将会存储为 Key `fresnsCallbackMessage`。

## 回调处理

`postMessage`

[https://github.com/fresns/client-wechat/tree/3.x/mixins/fresnsCallback.js](https://github.com/fresns/client-wechat/tree/3.x/mixins/fresnsCallback.js)

```js
mixins: [
  require('/mixins/fresnsCallback'),
],
```

- 在每个页面的 JS 文件 `Page` 中引入扩展 mixins 代码。
- 这是一个你自己定义的 JS，用于读取和处理存储中的回调消息。
- 回调消息的格式参考 [postMessage 说明](../../reference/callback/index.md#postmessage-说明)
- 解读并处理完回调消息后，清空消息。
