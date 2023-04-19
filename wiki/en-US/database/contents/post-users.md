# post_users

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | 自动递增 |
| post_id | bigint *UNSIGNED* | 帖子 ID |  | NO | Related field [posts->id](posts.md) |
| user_id | bigint *UNSIGNED* | 用户 ID |  | NO | Related field [users->id](../users/users.md) |
| plugin_unikey | varchar(64) | 录入的插件 |  | NO | 哪个插件触发的记录<br>Related field [plugins->unikey](../plugins/plugins.md) |
| more_json | json | 扩展字段 |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## 说明

- 由插件填入的数据，API 接口会输出，前端如何使用，由主题或客户端决定。
- 举例场景：打赏用户列表