# 站点设置

> 控制面板 > 系统 > 站点设置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 站点地址 | site_url |  | string | 内容 URL 拼接时使用 |
| 站点名称 | site_name |  | object | **多语言** |
| 站点描述 | site_desc |  | object | **多语言** |
| 站点介绍 | site_intro |  | object | **多语言** |
| 站点 ICON | site_icon |  | **file** | 输出时是图片 URL |
| 站点 LOGO | site_logo |  | **file** | 输出时是图片 URL |
| 版权所有名称 | site_copyright_name | Fresns | string |  |
| 版权所有年份 | site_copyright_years | 2021-Present | string |  |
| 管理员邮箱 | site_email |  | string | 当运行出错时，展示给用户，便于用户反馈问题。 |
| 运行模式 | site_mode | public | string | 公开模式 `public`<br>私有模式 `private` |

**私有模式**

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 开放状态 | site_private_status | false | boolean |  |
| 支持插件 | site_private_service |  | **plugin** | 用途场景 `join` |
| 到期后的状态 | site_private_end_after | 1 | number | `1` 站点内容全部不可见<br>`2` 到期前内容可见，新内容不可见 |
| 白名单角色 | site_private_whitelist_roles |  | array | 角色 ID |
