---
aside: false
---

# account_login_tokens

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| app_fskey | varchar(64) | Generate data for plugin fskey |  | NO | Related field [apps->fskey](../apps/apps.md) |
| account_id | bigint *UNSIGNED* | Account ID |  | NO | Related field [accounts->id](accounts.md) |
| token | varchar(64) | Login Token |  | NO | **Unique** |
| is_enabled | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid / 1.Valid |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
