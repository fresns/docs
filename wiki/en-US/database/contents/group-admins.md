# group_admins

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID | | NO | 自动递增 |
| group_id | int *UNSIGNED* | 小组 ID | | NO | Related field [groups->id](groups.md) |
| user_id | bigint *UNSIGNED* | 用户 ID |  | NO | Related field [users->id](../users/users.md) |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
