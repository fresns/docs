---
aside: false
---

# comment_logs *评论-日志表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID | | NO | 自动递增 |
| hcid | varchar(32) | 对外公开 ID |  | NO | **唯一值** |
| create_type | tinyint *UNSIGNED* | 创建类型 | 1 | NO | 1.快捷创建 / 2.编辑器创建 / 3.由帖子复原创建 |
| user_id | bigint *UNSIGNED* | 创建者 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| post_id | bigint *UNSIGNED* | 帖子 ID |  | NO | 关联字段 [posts->id](posts.md) |
| comment_id | bigint *UNSIGNED* | 评论 ID |  | YES | 关联字段 [comments->id](comments.md) |
| parent_comment_id | bigint *UNSIGNED* | 父级评论 ID |  | YES | 关联字段 [comments->id](comments.md)<br>为空代表一级评论 |
| geotag_id | int *UNSIGNED* | 地理 ID |  | YES | 关联字段 [geotags->id](geotags.md) |
| content | longtext | 内容 |  | YES | 完整内容 |
| lang_tag | varchar(16) | 语言标签 |  | YES |  |
| is_markdown | tinyint *UNSIGNED* | 内容是否为 MD 格式 | 0 | NO | 0.否 / 1.是 |
| is_anonymous | tinyint *UNSIGNED* | 是否匿名 | 0 | NO |  0.否 / 1.是 |
| is_private | tinyint *UNSIGNED* | 是否私有 | 0 | NO |  0.否 / 1.是 |
| location_info | json | 位置信息 |  | YES |  |
| more_info | json | 更多信息字段 |  | YES |  |
| permissions | json | 权限参数 |  | YES | [参考主表同名字段](comments.md#权限参数介绍) |
| is_enabled | tinyint *UNSIGNED* | 是否有效 | 1 | NO | 0.无效（仅自己可见） / 1.有效 |
| state | tinyint *UNSIGNED* | 状态 | 1 | NO |  1.未发表（草稿）<br>2.已发表（审核中）<br>3.已发表（审核通过并封存）<br>4.已发表（审核未通过，又为草稿状态） |
| reason | varchar(255) | 审核拒绝原因 |  | YES | 审核拒绝时使用 |
| submit_at | timestamp | 提交审核时间 |  | YES |  |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
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

## location_info 完整信息

::: code-group
```json [en]
{
    "langTag": "",
    "name": "Cupertino Library",
    "description": "",
    "placeId": "TRDucfBPkhuzzR9a7",
    "placeType": "building",
    "mapId": 2,
    "latitude": 37.3185039,
    "longitude": -122.0288017,
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
    "moreInfo": {}
}
```

```json [zh-Hans]
{
    "langTag": "",
    "name": "东方之门",
    "description": "",
    "placeId": "B020017GRH",
    "placeType": "building",
    "mapId": 4,
    "latitude": 31.299,
    "longitude": 120.585,
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
    "moreInfo": {}
}
```
:::
