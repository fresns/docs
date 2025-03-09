# Fresns API

```js
import { fresnsApi } from '/sdk/services/api';
```

## Global

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

## Common

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

## Account

```js
await fresnsApi.account.login({});
await fresnsApi.account.logout();
await fresnsApi.account.detail({});
await fresnsApi.account.walletRecords({});
```

## User

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

## Notification

```js
await fresnsApi.notification.list({});
await fresnsApi.notification.markAsRead({});
await fresnsApi.notification.delete({});
```

## Conversation

```js
await fresnsApi.conversation.list({});
await fresnsApi.conversation.detail('uidOrUsername', {});
await fresnsApi.conversation.messages('uidOrUsername', {});
await fresnsApi.conversation.pin('uidOrUsername');
await fresnsApi.conversation.markAsRead('uidOrUsername', {});
await fresnsApi.conversation.delete('uidOrUsername', {});
await fresnsApi.conversation.sendMessage({});
```

## Group

```js
await fresnsApi.group.tree({});
await fresnsApi.group.list({});
await fresnsApi.group.detail('gid', {});
await fresnsApi.group.creator('gid', {});
await fresnsApi.group.admins('gid', {});
await fresnsApi.group.interaction('gid', 'type', {});
```

## Hashtag

```js
await fresnsApi.hashtag.list({});
await fresnsApi.hashtag.detail('htid', {});
await fresnsApi.hashtag.interaction('htid', 'type', {});
```

## Geotag

```js
await fresnsApi.geotag.list({});
await fresnsApi.geotag.detail('gtid', {});
await fresnsApi.geotag.interaction('gtid', 'type', {});
```

## Post

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

## Comment

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

## Editor

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

## Search

```js
await fresnsApi.search.users({});
await fresnsApi.search.groups({});
await fresnsApi.search.hashtags({});
await fresnsApi.search.geotags({});
await fresnsApi.search.posts({});
await fresnsApi.search.comments({});
```

## Plugin

- By default, two plugin interfaces are already included, and you may incorporate additional ones as desired.
    - `/sdk/api/plugins/`
    - `/sdk/api/plugins.js`

### WeChat Login Plugin

- [https://marketplace.fresns.com/open-source/detail/WeChatLogin](https://marketplace.fresns.com/open-source/detail/WeChatLogin)

```js
await fresnsApi.plugins.wechatLogin.oauth({}); // WeChat Mini Program login
await fresnsApi.plugins.wechatLogin.oauthWebsite({}); // WeChat Mini Program authorization for web login
await fresnsApi.plugins.wechatLogin.oauthApp({}); // Multi-platform application login with a WeChat account
await fresnsApi.plugins.wechatLogin.oauthApple({}); // Multi-platform application login with an Apple account
```

### Generate a Share Poster

- [https://marketplace.fresns.com/open-source/detail/SharePoster](https://marketplace.fresns.com/open-source/detail/SharePoster)

```js
await fresnsApi.plugins.SharePoster.generate({}); // Generate a Share Poster
```
