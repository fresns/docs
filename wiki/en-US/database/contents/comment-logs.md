# comment_logs

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | 自动递增 |
| user_id | bigint *UNSIGNED* | 创建者 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| comment_id | bigint *UNSIGNED* | 评论 ID |  | YES | 关联字段 [comments->id](comments.md) |
| post_id | bigint *UNSIGNED* | 帖子 ID |  | NO | 关联字段 [posts->id](posts.md) |
| parent_comment_id | bigint *UNSIGNED* | 父级评论 ID |  | YES | 关联字段 [comments->id](comments.md)<br>为空代表一级评论 |
| create_type | tinyint *UNSIGNED* | 创建类型 | 1 | NO | 1.快捷创建 / 2.编辑器创建 / 3.由帖子复原创建 |
| is_plugin_editor | tinyint *UNSIGNED* | 是否仅在插件中编辑 | 0 | NO | 0.否 / 1.是 |
| editor_unikey | varchar(64) | 内容编辑插件 |  | YES | 关联字段 [plugins->unikey](../plugins/plugins.md) |
| content | longtext | 内容 |  | YES | 完整内容 |
| is_markdown | tinyint *UNSIGNED* | 内容是否为 MD 格式 | 0 | NO | 0.否 / 1.是 |
| is_anonymous | tinyint *UNSIGNED* | 是否匿名 | 0 | NO |  0.否 / 1.是 |
| map_json | json | 位置信息 |  | YES | 为空值，代表不创建或者修改时清空 |
| state | tinyint *UNSIGNED* | 状态 | 1 | NO |  1.未发表（草稿）<br>2.已发表（审核中）<br>3.已发表（审核通过并封存）<br>4.已发表（审核未通过，又为草稿状态） |
| reason | varchar(255) | 审核拒绝原因 |  | YES | 审核拒绝时使用 |
| submit_at | timestamp | 提交审核时间 |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

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

```json
{
    "mapId": "posts > map_id",
    "latitude": "posts > map_latitude",
    "longitude": "posts > map_longitude",
    "scale": "post_appends > map_scale",
    "continent": "Asia", // 不单独存字段，会随着完整 json 存入 post_appends->map_json
    "continentCode": "post_appends > map_continent_code",
    "country": "China",
    "countryCode": "post_appends > map_country_code",
    "region": "Jiangsu",
    "regionCode": "post_appends > map_region_code",
    "city": "post_appends > map_city",
    "cityCode": "post_appends > map_city_code",
    "district": "",
    "address": "",
    "zip": "post_appends > map_zip",
    "poi": "post_appends > map_poi",
    "poiId": "post_appends > map_poi_id",
}
```
