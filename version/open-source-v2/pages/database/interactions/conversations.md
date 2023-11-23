---
aside: false
---

# conversations

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| a_user_id | bigint *UNSIGNED* | Conversation A User ID |  | NO | Related field [users->id](../users/users.md) |
| b_user_id | bigint *UNSIGNED* | Conversation B User ID |  | NO | Related field [users->id](../users/users.md) |
| a_is_display | tinyint *UNSIGNED* | User A Display in List  | 1 | NO | 0.Hidden / 1.Displayed |
| b_is_display | tinyint *UNSIGNED* | User B Display in List  | 1 | NO | 0.Hidden / 1.Displayed |
| a_is_pin | tinyint *UNSIGNED* | User A Pin Conversation  | 0 | NO | 0.No / 1.Yes |
| b_is_pin | tinyint *UNSIGNED* | User B Pin Conversation  | 0 | NO | 0.No / 1.Yes |
| latest_message_at | timestamp | Latest Message Time |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
