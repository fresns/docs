---
aside: false
---

# mentions *艾特记录表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID | | NO | 自动递增 |
| user_id | bigint *UNSIGNED* | 发起艾特者 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| mention_type | tinyint *UNSIGNED* | 关联目标类型 | 1 | NO | [内容类型编号](../numbered-description.md#内容类型编号) |
| mention_id | bigint *UNSIGNED* | 关联目标主键 ID |  | NO |  |
| mention_user_id | bigint *UNSIGNED* | 被艾特用户 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
