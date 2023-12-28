---
aside: false
---

# mentions

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| user_id | bigint *UNSIGNED* | Initiator user ID |  | NO | Related field [users->id](../users/users.md) |
| mention_type | tinyint *UNSIGNED* | Related target type | 1 | NO | [Content Type](../numbered-description.md#content-type) |
| mention_id | bigint *UNSIGNED* | Related target primary key ID |  | NO |  |
| mention_user_id | bigint *UNSIGNED* | Mentioned user ID |  | NO | Related field [users->id](../users/users.md) |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
