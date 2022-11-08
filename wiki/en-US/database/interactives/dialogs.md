# dialogs

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | 自动递赠 |
| a_user_id | bigint *UNSIGNED* | 对话 A 用户 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| b_user_id | bigint *UNSIGNED* | 对话 B 用户 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| latest_message_id | bigint *UNSIGNED* | 最新一条消息 ID |  | YES | 关联字段 dialog_messages > id |
| latest_message_time | timestamp | 最新一条消息时间 |  | YES | 关联字段 dialog_messages > created_at |
| latest_message_text | text | 最新一条消息内容 |  | YES | 关联字段 dialog_messages > message_text |
| a_is_read | tinyint *UNSIGNED* | 对话 A 用户阅读状态 | 1 | NO | 0.未读 / 1.已读 |
| b_is_read | tinyint *UNSIGNED* | 对话 B 用户阅读状态 | 1 | NO | 0.未读 / 1.已读 |
| a_is_display | tinyint *UNSIGNED* | 对话 A 客户端对话列表是否隐藏  | 1 | NO | 0.隐藏 / 1.显示 |
| b_is_display | tinyint *UNSIGNED* | 对话 B 客户端对话列表是否隐藏  | 1 | NO | 0.隐藏 / 1.显示 |
| a_is_sticky | tinyint *UNSIGNED* | 对话 A 客户端对话列表是否置顶  | 0 | NO | 0.否 / 1.是 |
| b_is_sticky | tinyint *UNSIGNED* | 对话 B 客户端对话列表是否置顶  | 0 | NO | 0.否 / 1.是 |
| a_is_deactivate | tinyint *UNSIGNED* | 对话 A 用户账号状态 | 1 | NO | 0.已删除或注销 / 1.正常 |
| b_is_deactivate | tinyint *UNSIGNED* | 对话 B 用户账号状态 | 1 | NO | 0.已删除或注销 / 1.正常 |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
