# 微信小程序开发

采用小程序原生语言，纯净干爽，无耦合。二开时使用任何第三方服务或样式库时不用担心兼容和冲突问题，因为代码里没有使用和绑定任何其他元素，二开更方便。

## 代码仓库

- SDK: [https://github.com/fresns/client-sdk-wechat](https://github.com/fresns/client-sdk-wechat)
- Demo: [https://github.com/fresns/client-demo-wechat](https://github.com/fresns/client-demo-wechat)

## 使用说明

**源码方式**

- 将仓库中的 `/sdk/` 文件夹复制到你的小程序根目录。

**npm 方式**

> *开发中*

## 初始化

- 在小程序 `app.js` 中引用，放置在 `onShow` 用于初始化小程序配置。

```js
import { fresnsInit } from '/sdk/services/init';

await fresnsInit();
```

- 将 `/sdk/` 文件夹中 `env.example.js` 文件复制到小程序根目录，并改为 `env.js` 文件名。

## 小程序隐私保护指引

- 选中的照片或视频信息：用于`发表附带图片或视频的内容`
- 选中的文件：用于`发表附带文件的内容`
- 选择的位置信息：用于`发表附带位置信息的内容` （未启用 `chooseLocation` 功能则无需选择该隐私功能）
- 发布内容：用于`发表帖子和评论`
- 剪切板：用于`复制分享链接和帖子内容中的超链接`
- 设备信息：用于`记录互动和错误问题的日志`
