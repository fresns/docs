# Functions

## Configuration

- The following configuration functions utilize a [caching mechanism](/reference/cache.md) to prevent redundant server requests and reduce unnecessary load during repeated page accesses.

```js
import { fresnsConfig, fresnsLang, fresnsChannels, fresnsContentTypes, fresnsEditor, fresnsSticky } from '/sdk/helpers/configs';

await fresnsConfig(); // All configurations
await fresnsConfig('key', 'defaultValue'); // Specified configuration, with default if empty

await fresnsLang(); // Language pack
await fresnsLang('key', 'defaultValue'); // Specific language value

await fresnsChannels(); // Extended channels

await fresnsContentTypes('post'); // Content type: 'post' or 'comment'

await fresnsEditor.post('key'); // Supports dot notation for nested arrays
await fresnsEditor.comment('key'); // Supports dot notation for nested arrays
await fresnsEditor.stickers(); // Stickers

await fresnsSticky.posts(); // Globally pinned posts
await fresnsSticky.posts('gid'); // Group-specific pinned posts
await fresnsSticky.comments('pid'); // Pinned comments within a post
```

## Client Information

```js
import { switchLangTag, switchTheme, fresnsClient } from '/sdk/helpers/client';

await switchLangTag('langTag'); // Switch language by specifying new language tag
await switchTheme('theme'); // Switch theme: 'automatic', 'light', or 'dark'

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
fresnsClient.enableSharePoster;
fresnsClient.mpId;

// appBaseInfo
// {
//   isWeb: false,
//   isApp = false,
//   isWechat = true,
//   platform = "devtools", // ios, android, wechat
//   hasApp = false,
//   appUrl = '', // App Store or Google Play
//   downloadUrl = "", // Package download link
//   hasNewVersion = false,
//   newVersion = "",
//   newVersionDescribe = ""
// }
```

## Login

```js
import { fresnsLogin } from '/sdk/helpers/login';

await fresnsLogin.login('loginToken'); // User login
await fresnsLogin.switchUser('uid', 'pin', 'deviceToken'); // Switch user
await fresnsLogin.logout(); // User logout

await fresnsLogin.wechatAutoLogin(); // WeChat auto-login
await fresnsLogin.wechatLogin('autoRegister'); // WeChat login
await fresnsLogin.appWechatLogin('autoRegister'); // App WeChat login (configured via Open Platform)
await fresnsLogin.appWechatMiniProgramLogin('autoRegister'); // App WeChat Mini Program login
await fresnsLogin.appleLogin('autoRegister'); // Apple account login

// 'autoRegister' is a boolean, indicating whether to auto-register if the account doesn't exist.
```

## User Information

- The following functions also employ the [caching mechanism](/reference/cache.md) to minimize redundant requests to the server.

```js
import { fresnsAuth, fresnsAccount, fresnsUser, fresnsOverview, fresnsViewProfilePath, fresnsViewProfileData } from '/sdk/helpers/profiles';

fresnsAuth.aid;
fresnsAuth.aidToken;
fresnsAuth.uid;
fresnsAuth.uidToken;

fresnsAuth.accountLogin; // Account login status
fresnsAuth.userLogin; // User login status

await fresnsAccount(); // Complete account data
await fresnsAccount('key'); // Specific key-value data

await fresnsUser(); // Complete user data
await fresnsUser('key'); // Specific key-value data

await fresnsOverview(); // Overview of currently logged-in user
await fresnsOverview('key', 'uid'); // Specific key-value for another user under the same account

await fresnsViewProfilePath(); // User profile path prefix
await fresnsViewProfilePath('uidOrUsername'); // Complete user profile path

await fresnsViewProfileData('uidOrUsername'); // Current user profile data (useful for multi-page profiles to avoid repeated requests)
await fresnsViewProfileData('uidOrUsername', 'detail.key'); // Specific key-value data

// fresnsViewProfileData
// {
//     "items": {},
//     "detail": {},
//     "followersYouKnow": []
// }
```

## Cache

```js
import { cachePut, cacheGet } from '/sdk/helpers/cache';

cacheGet('key'); // Retrieve cached data
cachePut('key', data, minutes, 'tag'); // Write data to cache
clearCache('tag'); // Clear all cached data for a specific tag
```
