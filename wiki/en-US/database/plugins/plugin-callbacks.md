# plugin_callbacks

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| plugin_unikey | varchar(64) | Generate data for plugin unikey |  | NO | Related field [plugins->unikey](../plugins/plugins.md) |
| account_id | bigint *UNSIGNED* | 生成数据的账号 |  | YES | Related field [accounts->id](../accounts/accounts.md) |
| user_id | bigint *UNSIGNED* | 生成数据的用户 |  | YES | Related field [users->id](../users/users.md) |
| ulid | varchar(64) | 回调查询键 |  | NO | **唯一值**<br>Universally Unique Lexicographically Sortable Identifier<br>示例 01GQBMS8BBTCKTT7B0T3EER8XR |
| type | smallint *UNSIGNED* | 类型 | 1 | NO | 见下方描述，支持多个，以英文逗号隔开 |
| content | json | 返参内容 |  | NO | 见下方描述，支持多种类型一起存储 |
| is_use | tinyint *UNSIGNED* | 状态 | 0 | NO | 0.未调<br>1.已调（已使用） |
| use_plugin_unikey | varchar(64) | Data use plugin unikey |  | YES | Related field [plugins->unikey](../plugins/plugins.md) |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## type

| Number | Const Name | Description |
| --- | --- | --- |
| 1 | TYPE_CUSTOMIZE | 自定义 |
| 2 | TYPE_RELOAD | 重新加载 / 刷新页面 |
| 3 | TYPE_TOKEN | 凭证 |
| 4 | TYPE_ACCOUNT | 账号 |
| 5 | TYPE_USER | 用户 |
| 6 | TYPE_GROUP | 小组 |
| 7 | TYPE_HASHTAG | 话题 |
| 8 | TYPE_POST | 帖子 |
| 9 | TYPE_COMMENT | 评论 |
| 10 | TYPE_ARCHIVE | 扩展资料信息 |
| 11 | TYPE_EXTEND | 扩展内容信息 |
| 12 | TYPE_OPERATION | 扩展功能信息 |
| 13 | TYPE_FILE | 文件 |
| 14 | TYPE_MAP | 地图 |
| 15 | TYPE_CONTENT_READ_ALLOW | 内容阅读权限 |
| 16 | TYPE_CONTENT_USER_LIST | 内容附属用户 |
| 17 | TYPE_CONTENT_COMMENT_BUTTON | 内容评论按钮 |
| 18 | TYPE_CONTENT_COMMENT_CONFIG | 内容评论配置 |
