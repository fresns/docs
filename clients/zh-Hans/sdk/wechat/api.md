# Fresns API

```js
import { fresnsApi } from '/sdk/services';
```

## 全局配置

```js
await fresnsApi.global.status();
await fresnsApi.global.configs({});
await fresnsApi.global.languagePack();
await fresnsApi.global.channels();
await fresnsApi.global.archives('type', {});
await fresnsApi.global.contentTypes('type', {});
await fresnsApi.global.roles({});
await fresnsApi.global.stickers();
```

## 公共业务

```js
await fresnsApi.common.ipInfo({});
await fresnsApi.common.inputTips({});
await fresnsApi.common.cmdWord({});
await fresnsApi.common.fileUploadToken({});
await fresnsApi.common.fileUpload('filePath', {});
await fresnsApi.common.fileUpdate('fid', {});
await fresnsApi.common.fileLink('fid', {});
await fresnsApi.common.fileUsers('fid', {});
```

## 账号

```js
await fresnsApi.account.login({});
await fresnsApi.account.logout();
await fresnsApi.account.detail({});
await fresnsApi.account.walletRecords({});
```

## 用户

```js
await fresnsApi.user.login({});
await fresnsApi.user.overview({});
await fresnsApi.user.extcreditsRecords({});
await fresnsApi.user.updateProfile({});
await fresnsApi.user.updateSettings({});
await fresnsApi.user.mark({});
await fresnsApi.user.updateMarkNote({});
await fresnsApi.user.extendAction({});

await fresnsApi.user.list({});
await fresnsApi.user.detail('uidOrUsername', {});
await fresnsApi.user.followersYouKnow('uidOrUsername', {});
await fresnsApi.user.interaction('uidOrUsername', 'type', {});
await fresnsApi.user.markList('uidOrUsername', 'markType', 'listType', {});
```

## 通知

```js
await fresnsApi.notification.list({});
await fresnsApi.notification.markAsRead({});
await fresnsApi.notification.delete({});
```

## 私信

```js
await fresnsApi.conversation.list({});
await fresnsApi.conversation.detail('uidOrUsername', {});
await fresnsApi.conversation.messages('uidOrUsername', {});
await fresnsApi.conversation.pin('uidOrUsername');
await fresnsApi.conversation.markAsRead('uidOrUsername', {});
await fresnsApi.conversation.delete('uidOrUsername', {});
await fresnsApi.conversation.sendMessage({});
```

## 小组

```js
await fresnsApi.group.tree({});
await fresnsApi.group.list({});
await fresnsApi.group.detail('gid', {});
await fresnsApi.group.creator('gid', {});
await fresnsApi.group.admins('gid', {});
await fresnsApi.group.interaction('gid', 'type', {});
```

## 话题

```js
await fresnsApi.hashtag.list({});
await fresnsApi.hashtag.detail('htid', {});
await fresnsApi.hashtag.interaction('htid', 'type', {});
```

## 地理

```js
await fresnsApi.geotag.list({});
await fresnsApi.geotag.detail('gtid', {});
await fresnsApi.geotag.interaction('gtid', 'type', {});
```

## 帖子

```js
await fresnsApi.post.list({});
await fresnsApi.post.timelines({});
await fresnsApi.post.nearby({});
await fresnsApi.post.detail('pid', {});
await fresnsApi.post.interaction('pid', 'type', {});
await fresnsApi.post.users('pid', {});
await fresnsApi.post.quotes('pid', {});
await fresnsApi.post.histories('pid', {});
await fresnsApi.post.history('hpid', {});
await fresnsApi.post.delete('pid');
```

## 评论

```js
await fresnsApi.comment.list({});
await fresnsApi.comment.timelines({});
await fresnsApi.comment.nearby({});
await fresnsApi.comment.detail('cid', {});
await fresnsApi.comment.interaction('cid', 'type', {});
await fresnsApi.comment.histories('cid', {});
await fresnsApi.comment.history('hcid', {});
await fresnsApi.comment.delete('cid');
```

## 编辑器

```js
await fresnsApi.editor.configs('type');
await fresnsApi.editor.publish('type', 'filePath', {});
await fresnsApi.editor.edit('type', 'fsid');
await fresnsApi.editor.draftCreate('type', {});
await fresnsApi.editor.draftList('type', {});
await fresnsApi.editor.draftDetail('type', 'did', {});
await fresnsApi.editor.draftUpdate('type', 'did', {});
await fresnsApi.editor.draftPublish('type', 'did');
await fresnsApi.editor.draftRecall('type', 'did');
await fresnsApi.editor.draftDelete('type', 'did');
```

## 搜索

```js
await fresnsApi.search.users({});
await fresnsApi.search.groups({});
await fresnsApi.search.hashtags({});
await fresnsApi.search.geotags({});
await fresnsApi.search.posts({});
await fresnsApi.search.comments({});
```

## 插件

- 默认内置了两个插件接口，也可以自行添加更多。
    - `/sdk/api/plugins/`
    - `/sdk/api/plugins.js`

### 微信登录插件

- [https://marketplace.fresns.com/open-source/detail/WeChatLogin](https://marketplace.fresns.com/open-source/detail/WeChatLogin)

```js
await fresnsApi.plugins.wechatLogin.oauth({}); // 微信小程序登录
await fresnsApi.plugins.wechatLogin.oauthWebsite({}); // 微信小程序授权网页登录
await fresnsApi.plugins.wechatLogin.oauthApp({}); // 多端应用 App 微信账号登录
await fresnsApi.plugins.wechatLogin.oauthApple({}); // 多端应用 Apple 账号登录
```

### 生成分享海报

- [https://marketplace.fresns.com/open-source/detail/SharePoster](https://marketplace.fresns.com/open-source/detail/SharePoster)

```js
await fresnsApi.plugins.SharePoster.generate({}); // 生成分享海报
```
