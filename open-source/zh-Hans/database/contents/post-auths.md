---
aside: false
---

# post_auths *帖子-授权记录表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 记录 ID | | NO | 自动递增 |
| post_id | bigint *UNSIGNED* | 帖子 ID |  | NO | 关联字段 [posts->id](posts.md) |
| auth_type | tinyint *UNSIGNED* | 类型 | 1 | NO | 1.用户 / 2.角色 |
| auth_id | bigint *UNSIGNED* | 目标 ID |  | NO | 关联字段 [users->id](../users/users.md)<br>关联字段 [roles->id](../users/roles.md) |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
