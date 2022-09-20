# post_logs

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | 自动递增 |
| user_id | bigint *UNSIGNED* | 创建者 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| post_id | bigint *UNSIGNED* | 帖子 ID |  | YES | 关联字段 [posts->id](posts.md) |
| create_type | tinyint *UNSIGNED* | 创建类型 | 1 | NO | 1.快捷创建 / 2.编辑器创建 / 3.由帖子复原创建 |
| is_plugin_editor | tinyint *UNSIGNED* | 是否仅在插件中编辑 | 0 | NO | 0.否 / 1.是 |
| editor_unikey | varchar(64) | 内容编辑插件 |  | YES | 关联字段 [plugins->unikey](../plugins/plugins.md) |
| group_id | int *UNSIGNED* | 小组 ID |  | YES | 关联字段 groups > id |
| title | varchar(255) | 标题 |  | YES |  |
| content | longtext | 内容 |  | YES | 完整内容 |
| is_markdown | tinyint *UNSIGNED* | 内容是否为 MD 格式 | 0 | NO | 0.否 / 1.是 |
| is_anonymous | tinyint *UNSIGNED* | 是否匿名 | 0 | NO |  0.否 / 1.是 |
| is_comment | tinyint *UNSIGNED* | 是否可评论 | 1 | NO |  0.否 / 1.是 |
| is_comment_public | tinyint *UNSIGNED* | 是否公开评论（不公开则仅帖子作者可见） | 1 | NO |  0.否 / 1.是 |
| map_json | json | 位置信息 |  | YES | 为空值，代表不创建或者修改时清空 |
| allow_json | json | 阅读权限配置 |  | YES | 为空值，代表不创建或者修改时清空 |
| user_list_json | json | 特定用户配置 |  | YES | 为空值，代表不创建或者修改时清空 |
| comment_btn_json | json | 评论功能按钮设置 |  | YES | 为空值，代表不创建或者修改时清空 |
| state | tinyint *UNSIGNED* | 状态 | 1 | NO |  1.未发表（草稿）<br>2.已发表（审核中）<br>3.已发表（审核通过并封存）<br>4.已发表（审核未通过，又为草稿状态） |
| reason | varchar(255) | 审核拒绝原因 |  | YES | 审核拒绝时使用 |
| submit_at | timestamp | 提交审核时间 |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO | 作为草稿时Create Time |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## post_id 字段说明

- 为空代表新帖子草稿，可以有多条记录，相当于同一位创建者有多条待发表草稿。
- 有 ID 时
    - state=1、2、4 代表编辑该 ID 帖子现有内容，该 ID 不可再创建新草稿，相当于同一篇帖子只能有一篇正在编辑的草稿。
    - state=3 代表该 ID 帖子的历史正式版本，可能有多个。

## 字段: map_json 位置信息
位置信息

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

## 字段: allow_json 阅读权限配置

```json
{
    "isAllow": "posts > is_allow",
    "btnName": [
        {
            "langTag": "en Language Tag",
            "name": "post_appends > allow_btn_name 按钮名称"
        }
    ],
    "proportion": "post_appends > allow_proportion",
    "permissions": {
        "users": [
            1, 2,
            "userId", "userId"
            // 发表时存入 post_allows > object_id
            // post_allows > type = 1
        ],
        "roles": [
            1, 2,
            "roleId", "roleId"
            // 发表时存入 post_allows > object_id
            // post_allows > type = 2
        ]
    },
    "pluginUnikey": "post_appends > allow_plugin_unikey"
}
```

## 字段: user_list_json 特定用户列表

```json
{
    "isUserList": "post_appends > is_user_list",
    "userListName": [
        {
            "langTag": "en Language Tag",
            "name": "post_appends > user_list_name 特定用户名称"
        }
    ],
    "pluginUnikey": "post_appends > user_list_plugin_unikey"
}
```

## 字段: comment_btn_json 评论设置

```json
{
    "isCommentBtn": "post_appends > is_comment_btn",
    "btnName": [
        {
            "langTag": "en Language Tag",
            "name": "post_appends > comment_btn_name 按钮名称"
        }
    ],
    "pluginUnikey": "post_appends > comment_btn_plugin_unikey"
}
```