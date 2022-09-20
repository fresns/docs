# General

> Panel > Systems > General

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| 站点地址 | site_url |  | string | 内容 Web URL 拼接时使用 |
| 站点名称 | site_name |  | string | **多语言** |
| 站点介绍 | site_desc |  | string | **多语言** |
| 站点 ICON | site_icon |  | **file** | 输出时是图片 URL |
| 站点 LOGO | site_logo |  | **file** | 输出时是图片 URL |
| 版权所有名称 | site_copyright | Fresns | string |  |
| 版权所有年份 | site_copyright_years | 2021-Present | string |  |
| 默认时区 | default_timezone | +8 | string | UTC 值，参见[时区选项](../dictionary/utc.md)<br>客户端默认时区，当 API 未传时区时，涉及时间参数使用该时区值。<br>API 时区顺序: 用户配置->系统时区->默认时区 |
| 运行模式 | site_mode | public | string | 公开模式 public<br>私有模式 private |
| 公开模式：注册状态 | site_public_status | true | boolean |  |
| 公开模式：注册功能 | site_public_service |  | **plugin** | 插件应用场景参数 `register` |
| 公开模式：邮箱注册功能 | site_register_email | true | boolean |  |
| 公开模式：手机号注册功能 | site_register_phone | false | boolean |  |
| 公开模式：登录时同步注册 | site_login_or_register | false | boolean |  |
| 私有模式：开放状态 | site_private_status | false | boolean |  |
| 私有模式：支持插件 | site_private_service |  | **plugin** | 插件应用场景参数 `join` |
| 私有模式：到期后的状态 | site_private_end_after | 1 | number | `1` 站点内容全部不可见<br>`2` 到期前内容可见，新内容不可见 |