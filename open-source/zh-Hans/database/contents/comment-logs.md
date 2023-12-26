---
aside: false
---

# comment_logs *评论-日志表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID | | NO | 自动递增 |
| user_id | bigint *UNSIGNED* | 创建者 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| comment_id | bigint *UNSIGNED* | 评论 ID |  | YES | 关联字段 [comments->id](comments.md) |
| post_id | bigint *UNSIGNED* | 帖子 ID |  | NO | 关联字段 [posts->id](posts.md) |
| parent_comment_id | bigint *UNSIGNED* | 父级评论 ID |  | YES | 关联字段 [comments->id](comments.md)<br>为空代表一级评论 |
| create_type | tinyint *UNSIGNED* | 创建类型 | 1 | NO | 1.快捷创建 / 2.编辑器创建 / 3.由帖子复原创建 |
| is_plugin_editor | tinyint *UNSIGNED* | 是否仅在插件中编辑 | 0 | NO | 0.否 / 1.是 |
| editor_fskey | varchar(64) | 内容编辑插件 |  | YES | 关联字段 [apps->fskey](../apps/apps.md) |
| content | longtext | 内容 |  | YES | 完整内容 |
| is_markdown | tinyint *UNSIGNED* | 内容是否为 MD 格式 | 0 | NO | 0.否 / 1.是 |
| is_anonymous | tinyint *UNSIGNED* | 是否匿名 | 0 | NO |  0.否 / 1.是 |
| map_json | json | 位置信息 |  | YES | 为空值，代表不创建或者修改时清空 |
| state | tinyint *UNSIGNED* | 状态 | 1 | NO |  1.未发表（草稿）<br>2.已发表（审核中）<br>3.已发表（审核通过并封存）<br>4.已发表（审核未通过，又为草稿状态） |
| reason | varchar(255) | 审核拒绝原因 |  | YES | 审核拒绝时使用 |
| submit_at | timestamp | 提交审核时间 |  | YES |  |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## comment_id 字段说明

- 为空代表新评论草稿，可以有多条记录，相当于同一位创建者有多条待发表草稿。
- 有 ID 时
    - state=1、2、4 代表编辑该 ID 评论现有内容，该 ID 不可再创建新草稿，相当于同一篇评论只能有一篇正在编辑的草稿。
    - state=3 代表该 ID 评论的历史正式版本，可能有多个。

## post_id 字段说明

- 不能为空，记录该评论属于哪条帖子。
- 只有一级评论可以有草稿，子级评论不能生产草稿，所以 comment_id 不是父级评论 ID。
- state=1、2、4 代表未发表的评论，此时不能再创建该帖子的评论草稿。相当于同一篇帖子只能产生一条评论草稿。
- state=3，此时 comment_id 被补齐，表示该 comment_id 的历史版本。

## 字段: 位置信息 map_json

::: code-group
```json [字段说明]
// 未注明字段的参数，不单独存字段，与完整 json 存入 comment_appends->map_json
{
    "mapId": "comment_appends->map_id",
    "latitude": "comments->map_latitude",
    "longitude": "comments->map_longitude",
    "scale": "comment_appends->map_scale",
    "continent": "",
    "continentCode": "comment_appends->map_continent_code",
    "country": "",
    "countryCode": "comment_appends->map_country_code",
    "region": "",
    "regionCode": "comment_appends->map_region_code",
    "city": "",
    "cityCode": "comment_appends->map_city_code",
    "district": "",
    "address": "",
    "zip": "comment_appends->map_zip",
    "poi": "",
    "poiId": "comment_appends->map_poi_id",
}
```

```json [参数示例: en]
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

```json [参数示例: zh-Hans]
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
