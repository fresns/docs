# 翻译文档

你好！很高兴你有兴趣为 Fresns 文档翻译做贡献。在参与贡献之前，请务必花点时间阅读以下介绍：

## 介绍

Fresns 从数据流层面支持多语言，无需修改主程序、主题、插件、客户端，就可以无限新增各种语言。支持 187 种语言，239 个国家/地区（数据策略符合全球各地区的法律法规），只需要后台简单配置就可实现任意语言和时区的支持。

虽然我们支持了多语言，但是语言包还是需要翻译的，欢迎用你的语言支持 Fresns 生态系统的发展。

| 文档编写指南 | 版本 | 来源 |
| --- | --- | --- |
| [中文风格指南](https://tangjie.me/copywriting-style-guide) | 2021 | 唐杰 |
| [英文风格指南](writing-guide.md) | 2021 | Vue.js |

## Fresns 官网

你当前看到的所有页面均属于官网范畴，基于 Markdown 文件编写，由 VitePress 网站生成器编译生成。

- 代码仓库：[https://github.com/fresns/docs/](https://github.com/fresns/docs/)
- 语言文件目录：[/wiki/](https://github.com/fresns/docs/tree/main/wiki)
    - `en-US` [https://fresns.org](https://fresns.org)
    - `zh-Hans` [https://zh-hans.fresns.org](https://zh-hans.fresns.org)

## 控制面板

主程序（后端）管理中心的语言包直接是主程序代码仓库的文件，通过 Pull Request 方式参与翻译，可以对已有语言文件进行错误修正，或者增加新的语言文件。

- 代码仓库：[https://github.com/fresns/fresns](https://github.com/fresns/fresns)
- 语言文件目录：[app/Fresns/Panel/Resources/lang/](https://github.com/fresns/fresns/tree/2.x/app/Fresns/Panel/Resources/lang)

## 客户端

以「语言标签」为键名，存储在数据库配置表当中的语言包，客户端通过接口获取后解析到客户本地使用（参见 [多语言设置](../database/keyname/languages.md) 功能）。语言标识名参见配置表 [language_pack](../database/dictionary/language-pack.md) 键值，这是 Fresns 初始化基础语言标识名，运营者可以根据实际客户端情况进行新增自定义语言标识名。如果不理解语言标识名是什么意思，可以参考 `zh-Hans` 简体中文。

- 代码仓库：[https://github.com/fresns/docs/](https://github.com/fresns/docs/tree/master/language-pack)
- 语言文件目录：[/language-pack/](https://github.com/fresns/docs/tree/main/language-pack)

通过 Pull Request 方式参与翻译，我们会在主程序版本升级时将新语言包更新到主程序数据库中。

| 语言代码 | 地区代码 | 语言名称 | 地区名称 | 语言标签 | 中文名 |
| --- | --- | --- | --- | --- | --- |
| en |  | English |  | en | 英语 |
| en | US | English | United States | en-US | 英语（美式） |
| en | GB | English | United Kingdom | en-GB | 英语（英式） |
| es |  | Spanish |  | es | 西班牙语 |
| fr |  | French |  | fr | 法语 |
| de |  | German |  | de | 德语 |
| ja |  | Japanese |  | ja | 日语 |
| ko |  | Korean |  | ko | 韩语 |
| ru |  | Russian |  | ru | 俄语 |
| it |  | Italian |  | it | 意大利语 |
| pt |  | Portuguese |  | pt | 葡萄牙语 |
| pt | BR | Portuguese | Brazil | pt-BR | 葡萄牙语（巴西） |
| id |  | Indonesian |  | id | 印尼语 |
| hi |  | Hindi |  | hi | 印地语 |
| zh-Hans |  | Chinese (Simplified) |  | zh-Hans | 简体中文 |
| zh-Hant |  | Chinese (Traditional) |  | zh-Hant | 繁体中文 |