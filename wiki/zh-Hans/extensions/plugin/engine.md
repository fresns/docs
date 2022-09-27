# 网站引擎开发

基于主程序 API 开发的网站功能，分别有集成引擎和独立引擎。

- **集成引擎**：本质上也是插件，只不过从产品角度理解，它是一个完整的解决文案，比如完整社区功能，或者开发的一个完整商城、博客、CMS 等等。只要路由不冲突，主程序可以同时开启多个引擎。
- **独立引擎**：等同于移动应用（App），独立部署和独立运行在主程序之外的网站，实现业务服务器分别管理。

本文档讲解的是集成引擎的开发介绍，由于集成引擎本质上也是一种插件，所以开发逻辑与插件开发一致，文档参见插件开发即可。本文档只介绍与插件有差异的部分。

## 视图文件介绍

### 前台说明

- 前台界面的视图文件（模板文件）存储在项目根目录 `/extensions/themes/` 文件夹下，路径指引存储在配置表中，配置键名以引擎 `unikey` 加 `_Pc` 或 `_Mobile` 为命名格式。
- 引擎根据系统提供的指引，找到主题模板文件夹，读取 Blade 模板文件，渲染界面。

| 键名 | 例如引擎 unikey 为 `FresnsEngine` |
| --- | --- |
| {unikey}_Pc | FresnsEngine_Pc |
| {unikey}_Mobile | FresnsEngine_Mobile |

### 后台说明

- 如果引擎有后台页面（设置页），需在 `plugin.json` 文件的 `settingPath` 参数中提供。
- 引擎安装后，相关文件会分发到执行位置（参考插件文档）。


## 引擎产品标准

为了方便用户更换网站引擎的时候，主题模板还能兼容使用，所以建议引擎和主题模板开发者采用以下标准。不仅方便用户，也能使你开发的引擎能兼容更多主题模板，提升引擎的用户规模。

该标准仅是建议，可以不采纳；该标准针对的是主功能（社区功能），如果你开发 CMS、博客、商城等非社区类功能，此标准可忽略。

### 路由标准

采用该路径标准，可以避免与其他引擎发生路径冲突，比如开发 CMS 或者商城等其他功能引擎的时候，可以避免使用以下路径。另外，也方便移动应用有标准的 URL 用于分享时使用。

- [查看路由详情](../theme/structure.md)
- [查看默认引擎配置](../../database/keyname/website.md)

### 模板目录标准

采用标准的模板文件目录，可以避免用户更换引擎的时候，无法兼容使用，详情参见 [主题模板开发](../theme/) views 文件夹介绍。


## 引擎参考建议

### 功能配置键名建议

凡是网站都会涉及统计和 ICP 信息等配置，所以为了方便用户切换引擎或者使用多个引擎的时候，不必重复配置，建议采用统一的配置键名。

功能配置的键名归属 `websites` 键标签，参见[网站网页配置](../../database/keyname/website.md)。

### 菜单键名建议

菜单配置的键名归属 `menus` 键标签，参见[菜单配置](../../database/keyname/menus.md)。

### 路由路径建议

路由路径配置的键名归属 `websites` 键标签，参见[路径配置](../../database/keyname/paths.md)。

### 访问逻辑建议

Fresns 官方网站引擎就是该逻辑，供参考。

![Fresns 访问逻辑流程图](https://cdn.fresns.cn/wiki/flowchart/access.jpg)

### 账号逻辑建议

Fresns 官方网站引擎就是该逻辑，供参考。

![Fresns 账号逻辑流程图](https://cdn.fresns.cn/wiki/flowchart/account.jpg)