# dialog_messages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | 自动递赠 |
| dialog_id | bigint *UNSIGNED* | 对话 ID |  | NO | 关联字段 dialogs > id |
| send_user_id | bigint *UNSIGNED* | 发信者 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| send_deleted_at | timestamp | 发信者-Delete Time |  | YES | 为空代表没有删除 |
| message_type | tinyint *UNSIGNED* | 信息类型  | 1 | NO | 1.文本 / 2.文件 |
| message_text | text | 信息内容 |  | YES |  |
| message_file_id | bigint *UNSIGNED* | 文件 ID |  | YES | 关联字段 [files->id](../systems/files.md)<br>如果发的是文件，此处是文件关联 ID，比如图片 |
| receive_user_id | bigint *UNSIGNED* | 收信者 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| receive_read_at | timestamp | 收信者-阅读时间 |  | YES | 为空代表未读 |
| receive_deleted_at | timestamp | 收信者-Delete Time |  | YES | 为空代表没有删除 |
| is_enable | tinyint *UNSIGNED* | 是否有效 | 1 | NO | 0.无效 / 1.有效 |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
