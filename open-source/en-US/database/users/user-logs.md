---
aside: false
---

# user_logs

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| user_id | bigint *UNSIGNED* | User Primary Key ID |  | NO | Related field [users->id](users.md) |
| type | tinyint *UNSIGNED* | Log Type |  | NO | `1` Modify UID<br>`2` Modify username<br>`3` Modify nickname<br>`4` Modify avatar<br>`5` Modify banner<br>`6` Modify Bio<br>`7` Modify verified desc |
| content | text | Content |  | NO | Content before modification |
| is_enabled | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid / 1.Valid |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
