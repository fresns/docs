---
aside: false
---

# user_likes *用户赞记录表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| user_id | bigint *UNSIGNED* | 用户主键 ID |  | NO | 关联字段 [users->id](users.md) |
| mark_type | tinyint *UNSIGNED* | 操作类型 | 1 | NO | 1.正向（赞） / 2.反向（踩） |
| like_type | tinyint *UNSIGNED* | 目标类型 | 1 | NO | [内容类型编号](../numbered-description.md#内容类型编号) |
| like_id | bigint *UNSIGNED* | 目标 ID |  | NO |  |
| created_at | timestamp | 赞时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
