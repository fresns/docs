# user_roles *用户角色关联表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| user_id | bigint *UNSIGNED* | 用户主键 ID |  | NO | 关联字段 [users->id](users.md) |
| role_id | int *UNSIGNED* | 角色 ID |  | NO | 关联字段 [roles->id](roles.md) |
| is_main | tinyint *UNSIGNED* | 是否为主角色 | 0 | NO | 0.普通 / 1.主角色 |
| expired_at | timestamp | 角色有效期 |  | YES | 过期时间 |
| restore_role_id | int *UNSIGNED* | 继承角色 ID |  | YES | 如果是主角色，过期后谁继承主角色 |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
