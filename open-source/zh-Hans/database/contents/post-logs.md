---
aside: false
---

# post_logs *帖子-日志表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| user_id | bigint *UNSIGNED* | 创建者 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| post_id | bigint *UNSIGNED* | 帖子 ID |  | YES | 关联字段 [posts->id](posts.md) |
| parent_post_id | bigint *UNSIGNED* | 父级帖子 ID |  | YES | 关联字段 [posts->id](posts.md)<br>为空代表无引用帖子 |
| create_type | tinyint *UNSIGNED* | 创建类型 | 1 | NO | 1.快捷创建 / 2.编辑器创建 / 3.由帖子复原创建 |
| is_plugin_editor | tinyint *UNSIGNED* | 是否仅在插件中编辑 | 0 | NO | 0.否 / 1.是 |
| editor_fskey | varchar(64) | 内容编辑插件 |  | YES | 关联字段 [apps->fskey](../apps/apps.md) |
| group_id | int *UNSIGNED* | 小组 ID |  | YES | 关联字段 groups->id |
| title | varchar(255) | 标题 |  | YES |  |
| content | longtext | 内容 |  | YES | 完整内容 |
| is_markdown | tinyint *UNSIGNED* | 内容是否为 MD 格式 | 0 | NO | 0.否 / 1.是 |
| is_anonymous | tinyint *UNSIGNED* | 是否匿名 | 0 | NO |  0.否 / 1.是 |
| is_comment_disabled | tinyint *UNSIGNED* | 是否禁止评论 | 0 | NO |  0.否 / 1.是 |
| is_comment_private | tinyint *UNSIGNED* | 是否私有评论（私有仅帖子作者可见） | 0 | NO |  0.否 / 1.是 |
| map_json | json | 位置信息 |  | YES | 为空值，代表不创建或者修改时清空 |
| read_json | json | 阅读权限配置 |  | YES | 为空值，代表不创建或者修改时清空 |
| user_list_json | json | 特定用户配置 |  | YES | 为空值，代表不创建或者修改时清空 |
| comment_btn_json | json | 评论功能按钮设置 |  | YES | 为空值，代表不创建或者修改时清空 |
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

## 字段: map_json 位置信息

::: code-group
```json [字段说明]
// 未注明字段的参数，不单独存字段，与完整 json 存入 post_appends->map_json
{
    "mapId": "post_appends->map_id",
    "latitude": "posts->map_latitude",
    "longitude": "posts->map_longitude",
    "scale": "post_appends->map_scale",
    "continent": "",
    "continentCode": "post_appends->map_continent_code",
    "country": "",
    "countryCode": "post_appends->map_country_code",
    "region": "",
    "regionCode": "post_appends->map_region_code",
    "city": "",
    "cityCode": "post_appends->map_city_code",
    "district": "",
    "address": "",
    "zip": "post_appends->map_zip",
    "poi": "",
    "poiId": "post_appends->map_poi_id",
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

## 字段: read_json 阅读权限配置

```json
{
    "isReadLocked": "post_appends->is_read_locked",
    "btnName": [
        {
            "langTag": "en 语言标签",
            "name": "post_appends->read_btn_name 按钮名称"
        }
    ],
    "previewPercentage": "post_appends->read_pre_percentage",
    "permissions": {
        "users": [
            1, 2,
            "userId", "userId"
            // 发表时存入 post_auths->object_id
            // post_auths->type = 1
        ],
        "roles": [
            1, 2,
            "roleId", "roleId"
            // 发表时存入 post_auths->object_id
            // post_auths->type = 2
        ]
    },
    "pluginFskey": "post_appends->read_plugin_fskey"
}
```

## 字段: user_list_json 特定用户列表

```json
{
    "isUserList": "post_appends->is_user_list",
    "userListName": [
        {
            "langTag": "en 语言标签",
            "name": "post_appends->user_list_name 特定用户名称"
        }
    ],
    "pluginFskey": "post_appends->user_list_plugin_fskey"
}
```

## 字段: comment_btn_json 评论设置

```json
{
    "isCommentBtn": "post_appends->is_comment_btn",
    "btnName": [
        {
            "langTag": "en 语言标签",
            "name": "post_appends->comment_btn_name 按钮名称"
        }
    ],
    "pluginFskey": "post_appends->comment_btn_plugin_fskey"
}
```