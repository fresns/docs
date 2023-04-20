# post_allows

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Record ID | | NO | Auto Increment |
| post_id | bigint *UNSIGNED* | Post ID |  | NO | Related field [posts->id](posts.md) |
| type | tinyint *UNSIGNED* | Type | 1 | NO | 1.User / 2.Role |
| object_id | bigint *UNSIGNED* | Target ID |  | NO | Related field [users->id](../users/users.md)<br>Related field [roles->id](../users/roles.md) |
| is_initial | tinyint *UNSIGNED* | Is it an initial authorization? | 0 | NO | 0.No / 1.Yes |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
