---
aside: false
---

# conversation_messages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| cmid | varchar(32) | Public ID |  | NO | **Unique** |
| conversation_id | bigint *UNSIGNED* | Conversation ID |  | NO | Related field [conversations->id](conversations.md) |
| send_user_id | bigint *UNSIGNED* | Sender ID |  | NO | Related field [users->id](../users/users.md) |
| send_deleted_at | timestamp | Sender-Delete Time |  | YES | Empty means not deleted |
| message_type | tinyint *UNSIGNED* | Message Type  | 1 | NO | 1.Text / 2.File |
| message_text | text | Message Content |  | YES |  |
| message_file_id | bigint *UNSIGNED* | File ID |  | YES | Related field [files->id](../systems/files.md)<br>If it's a file, this is the associated file ID, such as an image |
| receive_user_id | bigint *UNSIGNED* | Receiver ID |  | NO | Related field [users->id](../users/users.md) |
| receive_read_at | timestamp | Receiver-Read Time |  | YES | Empty means unread |
| receive_deleted_at | timestamp | Receiver-Delete Time |  | YES | Empty means not deleted |
| is_enabled | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid / 1.Valid |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
