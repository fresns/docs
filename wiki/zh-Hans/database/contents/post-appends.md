# post_appends *帖子-附属表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID | | NO | 自动递增 |
| post_id | bigint *UNSIGNED* | 帖子 ID |  | NO | 关联字段 [posts->id](posts.md) |
| is_plugin_editor | tinyint *UNSIGNED* | 是否仅在插件中编辑 | 0 | NO | 0.否 / 1.是 |
| editor_unikey | varchar(64) | 内容编辑插件 |  | YES | 关联字段 [plugins->unikey](../plugins/plugins.md) |
| can_delete | tinyint *UNSIGNED* | 作者是否有权删除 | 1 | NO | 0.否 / 1.是 |
| is_allow | tinyint *UNSIGNED* | 是否全员允许阅读 | 1 | NO | 0.否 / 1.是 |
| allow_proportion | tinyint *UNSIGNED* | 阅读权限-无权时内容显示比例 |  | YES | 百分比<br>30 代表显示 30% 的内容 |
| allow_btn_name | varchar(64) | 阅读权限-无权时按钮文字 |  | YES | **多语言** |
| allow_plugin_unikey | varchar(64) | 阅读权限-处理插件 |  | YES | 关联字段 [plugins->unikey](../plugins/plugins.md) |
| is_user_list | tinyint *UNSIGNED* | 是否有特殊用户列表 | 0 | NO | 0.否 / 1.是 |
| user_list_name | varchar(128) | 特定用户的名称 |  | YES | **多语言**<br>比如：打赏用户、购买用户、已下载用户 |
| user_list_plugin_unikey | varchar(64) | 特定用户来源插件 |  | YES | 关联字段 [plugins->unikey](../plugins/plugins.md) |
| is_comment | tinyint *UNSIGNED* | 是否可评论 | 1 | NO |  0.否 / 1.是 |
| is_comment_public | tinyint *UNSIGNED* | 是否公开评论<br>不公开将仅帖子作者可见 | 1 | NO | 0.否 / 1.是 |
| is_comment_btn | tinyint *UNSIGNED* | 评论是否有扩展按钮<br>该按钮仅帖子作者可见 | 0 | NO | 0.否 / 1.是 |
| comment_btn_name | varchar(64) | 评论扩展按钮-按钮文字 |  | YES | **多语言** |
| comment_btn_style | varchar(64) | 评论扩展按钮-风格 |  | YES | primary / secondary / success / danger / warning / info |
| comment_btn_plugin_unikey | varchar(64) | 评论扩展按钮-处理插件 |  | YES | 关联字段 [plugins->unikey](../plugins/plugins.md) |
| ip_location | varchar(64) | IP 地区名 |  | YES |  |
| map_json | json | 地图-详细信息 |  | YES |  |
| map_scale | varchar(8) | 地图-比例 |  | YES | 缩放比例，范围 5~18 |
| map_continent_code | varchar(8) | 地图-洲代码 |  | YES | 亚洲 AS |
| map_country_code | varchar(8) | 地图-国家代码 |  | YES | 中国 CN |
| map_region_code | varchar(8) | 地图-省或州代码 |  | YES | 江苏 JS |
| map_city_code | varchar(8) | 地图-城市代码 |  | YES | 苏州 SZ |
| map_city | varchar(64) | 地图-城市名 |  | YES | 苏州 Suzhou |
| map_zip | varchar(32) | 地图-行政区划代码 |  | YES | 215000 |
| map_poi | varchar(128) | 地图-POI 信息 |  | YES |  |
| map_poi_id | varchar(64) | 地图-POI ID |  | YES | 地图服务商专属 ID |
| edit_count | smallint *UNSIGNED* | 编辑次数 | 0 | NO | 共编辑了几次 |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## map_json 完整信息

```json
{
    "mapId": "posts > map_id",
    "latitude": "posts > map_latitude",
    "longitude": "posts > map_longitude",
    "scale": "post_appends > map_scale",
    "continent": "Asia",
    "continentCode": "AS",
    "country": "China",
    "countryCode": "CN",
    "region": "Jiangsu",
    "regionCode": "JS",
    "city": "Suzhou",
    "cityCode": "SZ",
    "district": "Taicang",
    "address": "xxx",
    "zip": "215400",
    "poi": "",
    "poiId": "",
}
```