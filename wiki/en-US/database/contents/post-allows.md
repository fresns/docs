# post_allows

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 记录 ID | | NO | 自动递增 |
| post_id | bigint *UNSIGNED* | 帖子 ID |  | NO | Related field [posts->id](posts.md) |
| type | tinyint *UNSIGNED* | 类型 | 1 | NO | 1.用户 / 2.角色 |
| object_id | bigint *UNSIGNED* | 目标 ID |  | NO | Related field [users->id](../users/users.md)<br>Related field [roles->id](../users/roles.md) |
| is_initial | tinyint *UNSIGNED* | 是否为初始授权 | 0 | NO | 0.否 / 1.是 |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |