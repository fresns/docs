# WeChat Mini Program Development

Built with native Mini Program languages, the architecture remains clean, lean, and entirely decoupled. Secondary development becomes effortless, as there is no reliance on third-party services or style libraries, eliminating any concerns about compatibility or potential conflicts.

## Code Repositories

- SDK: [https://github.com/fresns/client-sdk-wechat](https://github.com/fresns/client-sdk-wechat)
- Demo: [https://github.com/fresns/client-demo-wechat](https://github.com/fresns/client-demo-wechat)
- Official Product: [https://github.com/jevantang/zhijie-app](https://github.com/jevantang/zhijie-app)

## Usage Instructions

**Source Code Integration**

- Copy the `/sdk/` folder from the repository directly into the root directory of your Mini Program.

**npm Integration**

> *Under Development*

## Initialization

- Import the following snippet into your Mini Program's `app.js` file and invoke it within the `onShow` lifecycle method to initialize the Mini Program configuration:

```js
import { fresnsInit } from '/sdk/services/init';

await fresnsInit();
```

- Duplicate the `env.example.js` file located in the `/sdk/` folder, place it in your Mini Program root directory, and rename it to `env.js`.

## Mini Program Privacy Protection Guidelines

- Selected Photos or Videos: Used `发表附带图片或视频的内容`
- Selected Files: Used `发表附带文件的内容`
- Selected Location Information:  Used `发表附带位置信息的内容` (If the `chooseLocation` feature is disabled, this privacy option is unnecessary)
- Published Content: Used `发表帖子和评论`
- Clipboard: Used `复制分享链接和帖子内容中的超链接`
- Device Information: Used `记录互动和错误问题的日志`
