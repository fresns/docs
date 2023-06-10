# 客户端开发

基于主程序 [API](../../api/) 开发的应用程序，可以是独立网站、App、微信小程序、快应用等各类形式。如果主程序 API 不满足需求，可以安装或开发扩展插件来新增 API，或者管理客户端的相关配置。

## Web 客户端

### 独立部署

如果你的客户端是独立部署，比如 Vue, React 等技术方案，或者其他技术形式，也和 App 一样，直接阅读 [API 文档](../../api/) 开发即可。

### 集成运行

如果你的客户端是集成在 Fresns 中运行，需要以插件的方式开发[网站引擎](../plugin/engine.md)，或者基于已有的引擎开发符合它的视图标准的主题模板。

比如采用 [FresnsEngine](https://marketplace.fresns.com/zh-Hans/open-source/detail/FresnsEngine) 作为 Web 客户端的运行支持，以下是开发标准。

- FresnsEngine 客户端技术方案是 **Laravel Blade** 模板引擎，以客户端思维开发 FresnsEngine 引擎的视图（主题）。
- [配置介绍](../theme/)
- [路径结构介绍](../theme/structure.md)
- [模板标签介绍](../theme/tags.md)
- [functions.blade.php 设置功能介绍](../theme/functions.md)

## App 客户端

- 请阅读 [API 文档](../../api/)，直接基于 API 开发 App 客户端。
