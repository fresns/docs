# 介绍

<p align="center"><img src="https://files.fresns.org/wiki/images/logo.png" width="300"></p>

<p align="center">
<img src="https://img.shields.io/badge/PHP-%5E8.1-blueviolet" alt="PHP" style="display:inline;">
<img src="https://img.shields.io/badge/MySQL-%5E5.7-orange" alt="MySQL" style="display:inline;margin-left:8px;">
<img src="https://img.shields.io/badge/PostgreSQL-%5E11.0-blue" alt="PostgreSQL" style="display:inline;margin:0 8px;">
<img src="https://img.shields.io/badge/SQL%20Server-%5E13.0-red" alt="SQL Server" style="display:inline;margin-right:8px;">
<img src="https://img.shields.io/badge/SQLite-%5E3.9-9cf" alt="SQLite" style="display:inline;margin-right:8px;">
<img src="https://img.shields.io/badge/License-Apache--2.0-green" alt="License" style="display:inline;">
</p>

Fresns 是一款免费开源的社交网络服务软件，专为跨平台而打造的通用型社区产品，支持灵活多样的内容形态，可以满足多种运营场景，符合时代潮流，更开放且更易于二次开发。

::: tip 说明：
- 使用者请阅读[安装教程](install.md)和[运营文档](operating.md)；
- 扩展插件开发者请阅读[扩展文档](../extensions/)和[数据字典](../database/)；
- 客户端开发者（网站端、小程序、App）请阅读 [API 文档](../api/)。
:::

## 程序结构

- 前后端分离
- 动静态分离
- 功能模块化

## 标准名称

| 名称 | 介绍 |
| --- | --- |
| 主程序 | Fresns 核心程序，包含管理面板、API、封装功能、管理器依赖包等。 |
| 扩展插件 | 延伸并增强主程序功能的挂载程序，包括网站引擎、控制面板、移动应用管理等插件。 |
| 网站引擎 | 基于主程序 API 开发的网站功能，分别有集成引擎和独立引擎<br>**集成引擎**：以插件方式运行在主程序中的网站引擎<br>**独立引擎**：独立部署和运行在主程序之外的网站，等同于移动应用（App） |
| 主题模板 | 基于网站引擎开发的外观样式（UE&UI 界面） |
| 移动应用 | 手机 App 和微信小程序等独立运行的移动端应用程序 |

## 许可协议

Fresns 遵循 [Apache-2.0](https://github.com/fresns/fresns/blob/main/LICENSE) 开源协议。

- 可以任何目的运行该软件。
- 可以学习并修改该软件，以使其按您的意愿执行。
- 可以重新分发软件拷贝。
- 可以将修改后的软件副本分发给他人。

## 免责申明

- Fresns 是一款支持多语言和跨时区的免费开源软件，研发和生态建设以开源组织方式协作，我们不为任何运营主体提供技术背书，不参与任何项目运营，不承担任何法律责任。由于下载代码即可使用，所以我们无法得知你的用途，但是**请在使用时遵守所在国家和地区的法律法规，禁止用于违法违规业务**。

- Fresns 没有私有库，无需商业授权，完全免费开源，自由使用。凡是非官网下载的源码，无论是原版、二开版、定制版等等，如有问题，与 Fresns 官方无关，我们不提供技术支持，不参与分支项目，不承担安全风险。

## 联系我们

- 项目发起人：[唐杰](https://tangjie.me/about)
- 联系邮箱：[support@fresns.org](mailto:support@fresns.org)
- 官方社区：[https://discuss.fresns.com](https://discuss.fresns.com/)
