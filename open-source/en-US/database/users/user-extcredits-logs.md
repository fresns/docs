---
aside: false
---

# user_extcredits_logs

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| user_id | bigint *UNSIGNED* | User Primary Key ID |  | NO | Related field [users->id](users.md) |
| extcredits_id | tinyint *UNSIGNED* | Extcredits ID |  | NO | extcredits 1~5 |
| type | tinyint *UNSIGNED* | Operation Type | 1 | NO | 1.increment / 2.decrement |
| amount | int *UNSIGNED* | Amount | 0 | NO | increment or decrement amount |
| opening_amount | int *UNSIGNED* | Opening Amount |  | NO |  |
| closing_amount | int *UNSIGNED* | Closing Amount |  | NO |  |
| app_fskey | varchar(64) | Related Plugin |  | NO | Related field [apps->fskey](../apps/apps.md) |
| remark | text | Remark |  | YES |  |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
