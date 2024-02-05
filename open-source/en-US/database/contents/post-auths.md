---
aside: false
---

# post_auths

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Record ID | | NO | Auto Increment |
| post_id | bigint *UNSIGNED* | Post ID |  | NO | Related field [posts->id](posts.md) |
| auth_type | tinyint *UNSIGNED* | Type | 1 | NO | 1.User / 2.Role |
| auth_id | bigint *UNSIGNED* | Target ID |  | NO | Related field [users->id](../users/users.md)<br>Related field [roles->id](../users/roles.md) |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
