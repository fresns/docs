---
aside: false
---

# group_admins

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| group_id | int *UNSIGNED* | Group ID | | NO | Related field [groups->id](groups.md) |
| user_id | bigint *UNSIGNED* | User ID |  | NO | Related field [users->id](../users/users.md) |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
