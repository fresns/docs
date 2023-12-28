---
aside: false
---

# code_messages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| app_fskey | varchar(64) | Associated Plugin Fskey |  | NO | Related field [apps->fskey](../apps/apps.md)<br>Fresns means it's the main program's status code |
| code | int *UNSIGNED* | Status Code |  | NO |  |
| messages | json | Status Code Information |  | NO | **Multilingual** |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
