---
aside: false
---

# user_likes

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| user_id | bigint *UNSIGNED* | User Primary Key ID |  | NO | Related field [users->id](users.md) |
| mark_type | tinyint *UNSIGNED* | Operation Type | 1 | NO | 1.Positive (Like) / 2.Negative (Dislike) |
| like_type | tinyint *UNSIGNED* | Type of target | 1 | NO | [Content Type](../numbered-description.md#content-type) |
| like_id | bigint *UNSIGNED* | Target ID |  | NO |  |
| created_at | timestamp | Like Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
