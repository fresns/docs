---
aside: false
---

# post_logs *帖子-日志表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| hpid | varchar(32) | 对外公开 ID |  | NO | **唯一值** |
| create_type | tinyint *UNSIGNED* | 创建类型 | 1 | NO | 1.快捷创建 / 2.编辑器创建 / 3.由帖子复原创建 |
| user_id | bigint *UNSIGNED* | 创建者 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| post_id | bigint *UNSIGNED* | 帖子 ID |  | YES | 关联字段 [posts->id](posts.md) |
| quoted_post_id | bigint *UNSIGNED* | 引用帖子 ID |  | YES | 关联字段 [posts->id](posts.md)<br>为空代表无引用帖子 |
| group_id | int *UNSIGNED* | 小组 ID |  | YES | 关联字段 [groups->id](groups.md) |
| geotag_id | int *UNSIGNED* | 地理 ID |  | YES | 关联字段 [geotags->id](geotags.md) |
| title | varchar(255) | 标题 |  | YES |  |
| content | longtext | 内容 |  | YES | 完整内容 |
| lang_tag | varchar(16) | 语言标签 |  | YES |  |
| is_markdown | tinyint *UNSIGNED* | 内容是否为 MD 格式 | 0 | NO | 0.否 / 1.是 |
| is_anonymous | tinyint *UNSIGNED* | 是否匿名 | 0 | NO |  0.否 / 1.是 |
| location_info | json | 位置信息 |  | YES |  |
| more_info | json | 更多信息字段 |  | YES |  |
| permissions | json | 权限参数 |  | YES |  |
| is_enabled | tinyint *UNSIGNED* | 是否有效 | 1 | NO | 0.无效（仅自己可见） / 1.有效 |
| state | tinyint *UNSIGNED* | 状态 | 1 | NO |  1.未发表（草稿）<br>2.已发表（审核中）<br>3.已发表（审核通过并封存）<br>4.已发表（审核未通过，又为草稿状态） |
| reason | varchar(255) | 审核拒绝原因 |  | YES | 审核拒绝时使用 |
| submit_at | timestamp | 提交审核时间 |  | YES |  |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## post_id 字段说明

- 为空代表新帖子草稿，可以有多条记录，相当于同一位创建者有多条待发表草稿。
- 有 ID 时
    - state=1、2、4 代表编辑该 ID 帖子现有内容，该 ID 不可再创建新草稿，相当于同一篇帖子只能有一篇正在编辑的草稿。
    - state=3 代表该 ID 帖子的历史正式版本，可能有多个。

## location_info 完整信息

::: code-group
```json [en]
{
    "name": "Cupertino Library",
    "description": "",
    "placeId": "TRDucfBPkhuzzR9a7",
    "placeType": "building",
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
    "zip": "95014"
}
```

```json [zh-Hans]
{
    "name": "东方之门",
    "description": "",
    "placeId": "B020017GRH",
    "placeType": "building",
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
    "zip": "215000"
}
```
:::
