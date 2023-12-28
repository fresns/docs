---
aside: false
---

# operation_usages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| usage_type | tinyint *UNSIGNED* | Type of target |  | NO | [Content Type](../numbered-description.md#content-type) |
| usage_id | bigint *UNSIGNED* | Target primary key ID |  | NO |  |
| operation_id | int *UNSIGNED* | Extended operation ID |  | NO | Related field `operations->id` |
| app_fskey | varchar(64) | Related plugin |  | NO | Related field [apps->fskey](../apps/apps.md)<br>Which plugin is related |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
