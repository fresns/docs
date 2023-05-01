# post_appends *帖子-附属表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID | | NO | 自动递增 |
| post_id | bigint *UNSIGNED* | 帖子 ID |  | NO | 关联字段 [posts->id](posts.md) |
| is_plugin_editor | tinyint *UNSIGNED* | 是否仅在插件中编辑 | 0 | NO | 0.否 / 1.是 |
| editor_fskey | varchar(64) | 内容编辑插件 |  | YES | 关联字段 [plugins->fskey](../plugins/plugins.md) |
| can_delete | tinyint *UNSIGNED* | 作者是否有权删除 | 1 | NO | 0.否 / 1.是 |
| is_allow | tinyint *UNSIGNED* | 是否全员允许阅读 | 1 | NO | 0.否 / 1.是 |
| allow_percentage | tinyint *UNSIGNED* | 阅读权限-无权时内容显示比例 |  | YES | 百分比<br>30 代表显示 30% 的内容 |
| allow_btn_name | varchar(64) | 阅读权限-无权时按钮文字 |  | YES | **多语言** |
| allow_plugin_fskey | varchar(64) | 阅读权限-处理插件 |  | YES | 关联字段 [plugins->fskey](../plugins/plugins.md) |
| is_user_list | tinyint *UNSIGNED* | 是否有特殊用户列表 | 0 | NO | 0.否 / 1.是 |
| user_list_name | varchar(128) | 特定用户的名称 |  | YES | **多语言**<br>比如：打赏用户、购买用户、已下载用户 |
| user_list_plugin_fskey | varchar(64) | 特定用户来源插件 |  | YES | 关联字段 [plugins->fskey](../plugins/plugins.md) |
| is_comment | tinyint *UNSIGNED* | 是否可评论 | 1 | NO |  0.否 / 1.是 |
| is_comment_public | tinyint *UNSIGNED* | 是否公开评论<br>不公开将仅帖子作者可见 | 1 | NO | 0.否 / 1.是 |
| is_comment_btn | tinyint *UNSIGNED* | 评论是否有扩展按钮<br>该按钮仅帖子作者可见 | 0 | NO | 0.否 / 1.是 |
| comment_btn_name | varchar(64) | 评论扩展按钮-按钮文字 |  | YES | **多语言** |
| comment_btn_style | varchar(64) | 评论扩展按钮-风格 |  | YES | primary / secondary / success / danger / warning / info |
| comment_btn_plugin_fskey | varchar(64) | 评论扩展按钮-处理插件 |  | YES | 关联字段 [plugins->fskey](../plugins/plugins.md) |
| more_json | json | 更多信息字段 |  | YES | 比如发布者 IP 位置名、设备名等 |
| map_json | json | 地图-详细信息 |  | YES |  |
| map_id | tinyint *UNSIGNED* | 地图-服务商编号 |  | YES | 来源地图服务商键值字典 |
| map_continent_code | varchar(8) | 地图-洲代码 |  | YES | 亚洲 AS |
| map_country_code | varchar(8) | 地图-国家代码 |  | YES | 中国 CN |
| map_region_code | varchar(8) | 地图-省或州代码 |  | YES | 江苏 JS |
| map_city_code | varchar(8) | 地图-城市代码 |  | YES | 苏州 SZ |
| map_zip | varchar(32) | 地图-行政区划代码 |  | YES | 215000 |
| map_poi_id | varchar(64) | 地图-POI ID |  | YES | 地图服务商专属 ID |
| edit_count | smallint *UNSIGNED* | 编辑次数 | 0 | NO | 共编辑了几次 |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## map_json 完整信息

::: code-group
```json [en]
{
    "mapId": 2,
    "latitude": 37.3185039,
    "longitude": -122.0288017,
    "scale": 14,
    "continent": "North America",
    "continentCode": "NA",
    "country": "United States",
    "countryCode": "US",
    "region": "California",
    "regionCode": "CA",
    "city": "Santa Clara",
    "cityCode": "SC",
    "district": "Cupertino",
    "address": "10800 Torre Ave, Cupertino, CA 95014",
    "zip": "95014",
    "poi": "Cupertino Library",
    "poiId": "TRDucfBPkhuzzR9a7",
}
```

```json [zh-Hans]
{
    "mapId": 4,
    "latitude": 31.299,
    "longitude": 120.585,
    "scale": 6,
    "continent": "亚洲",
    "continentCode": "AS",
    "country": "中国",
    "countryCode": "CN",
    "region": "江苏",
    "regionCode": "JS",
    "city": "苏州",
    "cityCode": "SZ",
    "district": "工业园区",
    "address": "苏州工业园区星港街199号",
    "zip": "215000",
    "poi": "东方之门",
    "poiId": "B020017GRH",
}
```
:::
