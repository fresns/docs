---
aside: false
---

# comment_appends *评论-附属表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID | | NO | 自动递增 |
| comment_id | bigint *UNSIGNED* | 评论 ID |  | NO | 关联字段 comments->id |
| is_plugin_editor | tinyint *UNSIGNED* | 是否仅在插件中编辑 | 0 | NO | 0.否 / 1.是 |
| editor_fskey | varchar(64) | 内容编辑插件 |  | YES | 关联字段 [apps->fskey](../apps/apps.md) |
| can_delete | tinyint *UNSIGNED* | 作者是否有权删除 | 1 | NO | 0.否 / 1.是 |
| is_close_btn | tinyint *UNSIGNED* | 是否关闭评论扩展按钮 | 0 | NO | 0.否 / 1.是<br>对应字段 [post_appends->is_comment_btn](post-appends.md) |
| is_change_btn | tinyint *UNSIGNED* | 是否更换评论扩展按钮 | 0 | NO | 0.否 / 1.是 |
| btn_name_key | varchar(64) | 更换按钮的名称键名 |  | YES | 关联字段 configs->item_key |
| btn_style | varchar(64) | 按钮风格 |  | YES | primary / secondary / success / danger / warning / info |
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
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
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
