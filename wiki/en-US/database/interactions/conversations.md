# conversations

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| a_user_id | bigint *UNSIGNED* | 对话 A 用户 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| b_user_id | bigint *UNSIGNED* | 对话 B 用户 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| a_is_display | tinyint *UNSIGNED* | 用户 A 对话列表是否隐藏  | 1 | NO | 0.隐藏 / 1.显示 |
| b_is_display | tinyint *UNSIGNED* | 用户 B 对话列表是否隐藏  | 1 | NO | 0.隐藏 / 1.显示 |
| a_is_pin | tinyint *UNSIGNED* | 用户 A 对话列表是否置顶  | 0 | NO | 0.否 / 1.是 |
| b_is_pin | tinyint *UNSIGNED* | 用户 B 对话列表是否置顶  | 0 | NO | 0.否 / 1.是 |
| latest_message_at | timestamp | 最新消息时间 |  | YES |  |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
