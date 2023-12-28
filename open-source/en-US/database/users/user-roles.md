---
aside: false
---

# user_roles

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| user_id | bigint *UNSIGNED* | User Primary Key ID |  | NO | Related field [users->id](users.md) |
| role_id | int *UNSIGNED* | Role ID |  | NO | Related field [roles->id](roles.md) |
| is_main | tinyint *UNSIGNED* | Is Main Role | 0 | NO | 0.Ordinary / 1.Main Role |
| expired_at | timestamp | Role Validity Period |  | YES | Expiration Time |
| restore_role_id | int *UNSIGNED* | Inherit Role ID |  | YES | If the main role, who will inherit the main role after expiration |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
