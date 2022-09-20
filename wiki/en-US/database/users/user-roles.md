# user_roles

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | 自动递赠 |
| user_id | bigint *UNSIGNED* | 用户主键 ID |  | NO | 关联字段 [users->id](users.md) |
| role_id | int *UNSIGNED* | 角色 ID |  | NO | 关联字段 [roles->id](roles.md) |
| is_main | tinyint *UNSIGNED* | 是否为主角色 | 0 | NO | 0.普通 / 1.主角色 |
| expired_at | timestamp | 角色有效期 |  | YES | 过期时间 |
| restore_role_id | int *UNSIGNED* | 继承角色 ID |  | YES | 如果是主角色，过期后谁继承主角色 |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
