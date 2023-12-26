---
aside: false
---

# code_messages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| app_fskey | varchar(64) | Associated Plugin Fskey |  | NO | Related field [apps->fskey](../apps/apps.md)<br>Fresns means it's the main program's status code |
| code | int *UNSIGNED* | Status Code |  | NO |  |
| lang_tag | varchar(16) | Language Tag |  | NO | Refer to "[Multilingual Uniqueness Logic](../../extensions/multilingual.md)" |
| message | varchar(255) | Status Code Information |  | NO |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
