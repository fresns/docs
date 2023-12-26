---
aside: false
---

# user_follows

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| user_id | bigint *UNSIGNED* | User Primary Key ID |  | NO | Related field [users->id](users.md) |
| mark_type | tinyint *UNSIGNED* | Operation Type | 1 | NO | 1.Positive (Follow) / 2.Negative (Block) |
| follow_type | tinyint *UNSIGNED* | Type of target | 1 | NO | [Content Type](../numbered-description.md#content-type) |
| follow_id | bigint *UNSIGNED* | Follow Target ID |  | NO |  |
| user_note | varchar(128) | User Note |  | YES | Note on the followed object by the user |
| is_mutual | tinyint *UNSIGNED* | User-specific: Mutual Follow | 0 | NO | 0.No / 1.Yes |
| is_enabled | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid / 1.Valid |
| expired_at | timestamp | Group-specific: Expiration Time |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
