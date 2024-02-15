---
aside: false
---

# extend_users

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| extend_id | bigint *UNSIGNED* | Extend Content ID |  | NO | Related field `extends->id` |
| user_id | bigint *UNSIGNED* | User Primary Key ID |  | NO | Related field [users->id](../users/users.md) |
| action_key | varchar(64) | Used Key Name |  | YES |  |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
