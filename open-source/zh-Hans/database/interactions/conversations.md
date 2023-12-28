---
aside: false
---

# conversations *对话表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| a_user_id | bigint *UNSIGNED* | 对话 A 用户 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| b_user_id | bigint *UNSIGNED* | 对话 B 用户 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| a_is_display | tinyint *UNSIGNED* | 用户 A 对话列表是否隐藏  | 1 | NO | 0.隐藏 / 1.显示 |
| b_is_display | tinyint *UNSIGNED* | 用户 B 对话列表是否隐藏  | 1 | NO | 0.隐藏 / 1.显示 |
| a_is_pin | tinyint *UNSIGNED* | 用户 A 对话列表是否置顶  | 0 | NO | 0.否 / 1.是 |
| b_is_pin | tinyint *UNSIGNED* | 用户 B 对话列表是否置顶  | 0 | NO | 0.否 / 1.是 |
| latest_message_at | timestamp | 最新消息时间 |  | YES |  |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
