# 网站网页

> 控制面板 > 客户端 > 网站网页

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 引擎服务商 | engine_service | FresnsEngine | plugin |  |
| 引擎 API 类型 | engine_api_type | local | string | `local` 或 `remote` |
| Key 关联 | engine_key_id |  | number | 关联字段 [session_keys->id](../systems/session-keys.md) |
| API Host | engine_api_host |  | string |  |
| API App ID | engine_api_app_id |  | string |  |
| API App Secret | engine_api_app_secret |  | string |  |
| 统计代码 | website_stat_code |  | string | 网页统计工具代码 |
| 统计代码位置 | website_stat_position |  | string | `head` 或 `body`<br>统计代码载入到 HTML 的哪个位置 |
| 网站互动功能 | website_status | true | boolean | 网页端互动功能关闭后，可指定访问网站时输出的内容数量<br>比如专注移动应用运营的项目，网站只为分享导流使用，不希望用户使用完整功能。 |
| 显示内容数量 | website_number | 5 | number | 网页端互动功能关闭后，用户访问只显示多少条内容<br>比如设置为 5，则用户无论访问帖子列表还是查看评论，只显示 5 条。 |
| 内容显示比例 | website_proportion | 30 | number | 网页端互动功能关闭后，帖子内容显示比例，单位：百分比<br>比如设置为 30%，则访问帖子详情页只显示帖子 30% 的内容，其余内容引荐打开 App 浏览。 |
| 中国大陆模式 | site_china_mode | false | boolean | `false` 或 `true`<br>是否显示备案信息，如果网站服务器不在中国大陆，则关闭 |
| ICP 备案号 | china_icp_filing |  | string | [https://beian.miit.gov.cn](https://beian.miit.gov.cn/) |
| ICP 许可证号 | china_icp_license |  | string | [https://dxzhgl.miit.gov.cn](https://dxzhgl.miit.gov.cn/) |
| 公安备案号 | china_psb_filing |  | string | [http://www.beian.gov.cn](http://www.beian.gov.cn/) |
| 广播电视节目制作经营许可证 | china_broadcasting_license |  | string | [https://zw.nrta.gov.cn](https://zw.nrta.gov.cn/) |

## 主题配置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 电脑主题 | FresnsEngine_Desktop |  | string | 官方引擎电脑主题配置 |
| 手机主题 | FresnsEngine_Mobile |  | string | 官方引擎手机主题配置 |