# 站点设置

> 控制面板 > 系统 > 站点设置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 站点地址 | site_url |  | string | 内容 Web URL 拼接时使用 |
| 站点名称 | site_name |  | string | **多语言** |
| 站点介绍 | site_desc |  | string | **多语言** |
| 站点 ICON | site_icon |  | **file** | 输出时是图片 URL |
| 站点 LOGO | site_logo |  | **file** | 输出时是图片 URL |
| 版权所有名称 | site_copyright | Fresns | string |  |
| 版权所有年份 | site_copyright_years | 2021-Present | string |  |
| 运行模式 | site_mode | public | string | 公开模式 public<br>私有模式 private |
| 公开模式：注册状态 | site_public_status | true | boolean |  |
| 公开模式：注册功能 | site_public_service |  | **plugin** | 插件应用场景参数 `register` |
| 公开模式：邮箱注册功能 | site_email_register | true | boolean |  |
| 公开模式：手机号注册功能 | site_phone_register | false | boolean |  |
| 公开模式：登录时同步注册 | site_login_or_register | false | boolean |  |
| 私有模式：开放状态 | site_private_status | false | boolean |  |
| 私有模式：支持插件 | site_private_service |  | **plugin** | 插件应用场景参数 `join` |
| 私有模式：到期后的状态 | site_private_end_after | 1 | number | `1` 站点内容全部不可见<br>`2` 到期前内容可见，新内容不可见 |
| 登录支持：邮箱 | site_email_login | true | boolean |  |
| 登录支持：手机号 | site_phone_login | false | boolean |  |
| 管理员邮箱 | site_email |  | string | 当运行出错时，展示给用户，便于用户反馈问题。 |
| 中国大陆模式 | site_china_mode | false | boolean | `false` 或 `true`<br>是否显示备案信息，如果网站服务器不在中国大陆，则关闭 |
| ICP 备案号 | china_icp_filing |  | string | [https://beian.miit.gov.cn](https://beian.miit.gov.cn/) |
| ICP 许可证号 | china_icp_license |  | string | [https://dxzhgl.miit.gov.cn](https://dxzhgl.miit.gov.cn/) |
| 公安备案号 | china_psb_filing |  | string | [http://www.beian.gov.cn](http://www.beian.gov.cn/) |
| 广播电视节目制作经营许可证 | china_broadcasting_license |  | string | [https://zw.nrta.gov.cn](https://zw.nrta.gov.cn/) |
