---
aside: false
---

# post_users

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| post_id | bigint *UNSIGNED* | Post ID |  | NO | Related field [posts->id](posts.md) |
| user_id | bigint *UNSIGNED* | User ID |  | NO | Related field [users->id](../users/users.md) |
| app_fskey | varchar(64) | Input plugin |  | NO | Which plugin triggered the record<br>Related field [apps->fskey](../apps/apps.md) |
| more_json | json | Extended fields |  | YES |  |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## Explanation

- Data filled in by apps, API output, how the view uses it is determined by the client.
- Example scenario: Reward user list