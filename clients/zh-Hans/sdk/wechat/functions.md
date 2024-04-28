# 功能函数

## 初始化

- 在小程序 `app.js` 中引用，放置在 `onShow` 用于初始化小程序配置。

```js
import { fresnsInit } from '/sdk/services';

await fresnsInit();
```

## 配置项

- 以下配置功能将采用[缓存机制](/reference/cache.md)，避免每次访问页面都请求接口，导致服务端承担重复性负载。

```js
import { fresnsConfig, fresnsLang, fresnsChannels, fresnsContentTypes, fresnsEditor, fresnsSticky } from '/sdk/helpers/configs';

await fresnsConfig(); // 全部配置
await fresnsConfig('key', 'defaultValue'); // 指定配置，为空时的默认值

await fresnsLang(); // 语言包
await fresnsLang('key', 'defaultValue'); // 指定语言值

await fresnsChannels(); // 扩展频道

await fresnsContentTypes('post'); // 内容类型 post 或 comment

await fresnsEditor.post('key'); // 支持「点表示法」表示多维数组
await fresnsEditor.comment('key'); // 支持「点表示法」表示多维数组
await fresnsEditor.stickers(); // 表情图

await fresnsSticky.posts(); // 全局置顶帖子
await fresnsSticky.posts('gid'); // 指定小组的置顶
await fresnsSticky.comments('pid'); // 帖子的置顶评论
```

## 客户端信息

```js
import { switchLangTag, switchTheme, fresnsClient } from '/sdk/helpers/client';

await switchLangTag('langTag'); // 切换语言，新语言标签
await switchTheme('theme'); // 切换主题: automatic, light, dark

fresnsClient.name;
fresnsClient.theme;
fresnsClient.platformId;
fresnsClient.version;
fresnsClient.langTag;
fresnsClient.deviceInfo;
fresnsClient.appBaseInfo;
fresnsClient.enableApiQuic;
fresnsClient.enableWeChatLogin;
fresnsClient.enableWeChatAutoLogin;
```

## 登录

```js
import { fresnsLogin } from '/sdk/helpers/login';

await fresnsLogin.login('loginToken'); // 登录
await fresnsLogin.switchUser('uid', 'pin', 'deviceToken'); // 切换用户
await fresnsLogin.logout(); // 退出登录

await fresnsLogin.wechatAutoLogin(); // 微信自动登录
await fresnsLogin.wechatLogin('autoRegister'); // 微信登录
await fresnsLogin.appWechatLogin('autoRegister'); // App 微信登录（使用开放平台配置）
await fresnsLogin.appWechatMiniProgramLogin('autoRegister'); // App 微信小程序登录（使用小程序配置）
await fresnsLogin.appleLogin('autoRegister'); // 苹果账号登录

// autoRegister 为布尔型，表示当账户不存在时，是否自动注册一个账号。
```

## 用户信息

- 以下配置功能将采用[缓存机制](/reference/cache.md)，避免每次访问页面都请求接口，导致服务端承担重复性负载。

```js
import { fresnsAuth, fresnsAccount, fresnsUser, fresnsOverview, fresnsViewProfilePath, fresnsViewProfileData } from '/sdk/helpers/profiles';

fresnsAuth.aid;
fresnsAuth.aidToken;
fresnsAuth.uid;
fresnsAuth.uidToken;

fresnsAuth.accountLogin; // 账户是否登录
fresnsAuth.userLogin; // 用户是否登录

await fresnsAccount(); // 全部数据
await fresnsAccount('key'); // 指定键值对

await fresnsUser(); // 全部数据
await fresnsUser('key'); // 指定键值对

await fresnsOverview(); // 当前登录用户的概览
await fresnsOverview('key', 'uid'); // 指定键值对，指定用户（账户名下其他用户）

await fresnsViewProfilePath(); // 用户主页路径前缀
await fresnsViewProfilePath('uidOrUsername'); // 完整的用户主页路径

await fresnsViewProfileData('uidOrUsername'); // 当前用户主页详情（当用户主页有多个切换页面时，可以防止每次切换都请求一次接口）
await fresnsViewProfileData('uidOrUsername', 'detail.key'); // 指定键值对
// {
//     "items": {},
//     "detail": {},
//     "followersYouKnow": []
// }
```

## 缓存

```js
import { cachePut, cacheGet } from '/sdk/helpers/cache';

cacheGet('key'); // 获取缓存
cachePut('key', data, minutes, 'tag'); // 写入缓存
clearCache('tag'); // 清除指定 tag 的所有缓存
```
