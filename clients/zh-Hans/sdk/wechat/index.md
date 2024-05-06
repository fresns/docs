# 微信小程序开发

采用小程序原生语言，纯净干爽，无耦合。二开时使用任何第三方服务或样式库时不用担心兼容和冲突问题，因为代码里没有使用和绑定任何其他元素，二开更方便。

## 代码仓库

- [https://github.com/fresns/client-wechat](https://github.com/fresns/client-wechat)

## 使用说明

遵循 [Fresns 客户端设计理念](../../guide/idea.md)，小程序以结构化方式实现了全部功能，使用者可以根据自己的需求，自定义页面风格、交互体验、栏目命名、入口路径等，实现各自个性化的运营场景。

- 1、下载[代码包](https://github.com/fresns/wechat/releases)；
- 2、解压后使用[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)导入项目，项目名称和 AppID 填写你的小程序信息；
- 3、将根目录的 `fresns.example.js` 文件名修改为 `fresns.js`，然后根据里面的描述填写你的配置信息（[公共密钥](https://docs.fresns.com/zh-Hans/clients/sdk/#%E5%85%AC%E5%85%B1%E5%AF%86%E9%92%A5)）；
- 4、将你的 `apiHost` 录入到微信配置：公众平台->开发->开发管理->开发设置
    - 服务器域名 `request合法域名` 和 `uploadFile合法域名`
    - 业务域名
- 5、配置基础库最低可用版本
    - 公众平台->设置->基本设置->版本设置->基础库最低可用版本
    - 最低可用版本 `3.1.0`
- 6、申请位置信息接口
    - 如果你不需要该功能，忽略下方开通描述，并删除 `app.json` 配置文件中 `"requiredPrivateInfos": ["chooseLocation"]`
    - 公众平台->开发->开发管理->接口设置
    - 申请开通 `wx.chooseLocation` 打开地图选择位置
    - 申请时，可使用编辑器页面截图作为使用场景
- 7、安装配套插件「[微信登录](https://marketplace.fresns.cn/open-source/detail/WeChatLogin)」，配置小程序密钥信息；
- 8、自定义开发
    - 修改风格样式，或者使用第三方开发的风格样式覆盖原文件
    - 导航栏位置 `components/commons/tabbar/`
    - 回调处理 `mixins/fresnsCallback.js`
    - 私有模式处理 `mixins/common.js` `this.checkFresnsSiteMode();`
- 9、使用[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)上传代码，提交到微信公众平台。

小程序支持编译成 iOS 和 Android 移动应用，也可以编译成 Web 网页应用，具体方法阅读 [Donut](https://dev.weixin.qq.com/) 教程。

## 小程序隐私保护指引

- 选中的照片或视频信息：用于`发表附带图片或视频的内容`
- 选中的文件：用于`发表附带文件的内容`
- 选择的位置信息：用于`发表附带位置信息的内容` （未启用 `chooseLocation` 功能则无需选择该隐私功能）
- 发布内容：用于`发表帖子和评论`
- 剪切板：用于`复制分享链接和帖子内容中的超链接`
- 设备信息：用于`记录互动和错误问题的日志`
