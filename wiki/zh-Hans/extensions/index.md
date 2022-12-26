# 扩展 Fresns

<p align="center"><img src="https://cdn.fresns.cn/wiki/images/logo.png" width="300"></p>

<p align="center">
<img src="https://img.shields.io/badge/Laravel-v9.x-blueviolet" alt="Laravel" style="display:inline">
<img src="https://img.shields.io/badge/Fresns-v2.x-blue" alt="Fresns" style="display:inline;margin:0 8px">
</p>

Fresns 虽小，五脏俱全。事实上 Fresns 自带的大多数功能，都以扩展的形式实现。

这使得 Fresns 具有高度的可定制性。用户可以随时禁用任何不需要的功能，或者安装其他扩展程序，打造完美的社区论坛或者其他形式的产品。

为了实现这种可扩展性，Fresns 已经构建了丰富的 API 和扩展点，你只要掌握一些编程知识，就可以利用这些 API 来添加几乎所有你想拥有的功能。


## 扩展类型

**功能插件**：增强并丰富主程序功能的扩展，例如扩展一个频道、自定义注册流程或编辑器、增强管理功能、内容安全检查、控制面板等等。

**网站引擎**：基于主程序 [API](../api/) 开发的网站功能，分别有集成引擎和独立引擎。独立引擎等于一个独立网站，独立部署和运行在主程序之外，等同于移动应用（App），通过独立部署，可以实现一套数据在不同功能形式上运行，实现差异化运营的目的。

**主题模板**：依附于网站引擎的前端界面，根据所选引擎的模板标准开发的 UE&UI 界面。

**移动应用**：基于主程序 [API](../api/) 开发的移动在外的应用程序，可以是独立网站、App、微信小程序、快应用等各类形式。如果主程序 API 不满足需求，可以安装或开发扩展插件来新增 API，或者管理移动应用的相当配置，所以移动应用可能会开发一个插件，安装在控制台“移动应用”频道，用于增强移动端功能和管理。


## 目录结构

Fresns 主程序是基于 PHP Laravel 框架和 MySQL 数据库而开发的社交网络服务软件。

```php
fresns/         // 主程序根目录
├── app/            // 核心代码目录
│   ├── Console/        // 控制类
│   ├── Exceptions/     // 异常类
│   ├── Http/           // 业务类
│   ├── Models/         // 模型类
│   ├── Helpers/        // 辅助类
│   ├── Utilities/      // 工具类
│   ├── Providers/      // 公共服务者
│   └── Fresns/         // 业务功能
│       ├── Install/        // 初始化安装
│       ├── Panel/          // 控制面板
│       ├── Words/          // 命令字
│       ├── Subscribe/      // 订阅器
│       └── Api/            // 社区 API
├── bootstrap/      // 引导程序目录
├── config/         // 配置文件目录
├── database/       // 数据文件目录
├── extensions/     // 扩展目录
│   ├── plugins/        // 插件目录
│   ├── themes/         // 主题目录
│   └── backups/        // 备份目录
├── public/         // 网站根目录
│   ├── assets/         // 扩展静态文件
│   │   ├── plugins/        // 插件资源目录
│   │   └── themes/         // 主题资源目录
│   ├── static/         // 内置静态文件
│   ├── index.php       // 网站入口文件
│   ├── favicon.ico     // 站点 ico 图标
│   └── robots.txt      // Robots 协议
├── resources/      // 框架资源目录
│   ├── css/            // 样式资源
│   ├── js/             // JS 资源
│   ├── lang/           // 共用语言
│   └── views/          // 共用视图
├── storage/        // 框架存储目录
├── tests/          // 框架测试目录
├── .env.example    // 配置参数文件模板
├── artisan         // 框架命令行接口
├── compose.json    // 依赖项配置信息
├── compose.lock    // 依赖项安装信息
├── fresns.json     // 主程序信息
├── install.lock    // 安装锁定文件（有该文件后，禁止再执行安装）
├── package.json    // 前端编译用途文件
├── webpack.mix.js  // 前端编译用途文件
├── phpunit.xml     // 单元测试用途文件
└── LICENSE         // 版权文件
```


## 依赖库

Fresns 主程序 Composer 依赖库关系。

| 名称 | 介绍 |
| --- | --- |
| [DTO](https://github.com/fresns/dto) | 数据传输对象扩展包，用于便捷的生成数据规则和检查传输数据。 |
| [命令字管理器](https://github.com/fresns/cmd-word-manager) | 帮助插件与插件之间通讯协作。 |
| [插件管理器](https://github.com/fresns/plugin-manager) | 插件的开发和运行：安装、启用、停用、卸载。 |
| [主题管理器](https://github.com/fresns/theme-manager) | 主题的开发和管理：安装、编辑、卸载。 |
| [应用市场管理器](https://github.com/fresns/market-manager) | 从应用市场下载和升级应用，管理应用入库和升级更新。 |


## 联系我们

- 项目发起人：[唐杰](https://tangjie.me/about)
- 联系邮箱：[support@fresns.org](mailto:support@fresns.org)
- 官方社区：[https://discuss.fresns.cn](https://discuss.fresns.cn/)
- 微信群：*扫描下方二维码加唐杰微信，告之你要加「开发者群」，稍后唐杰会拉你进群。*

<img src="https://cdn.fresns.cn/wiki/images/wechat.jpg" width="200">

## 关注我们

<img src="https://cdn.fresns.cn/wiki/images/wechat-mp.png" width="400">
