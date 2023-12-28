---
aside: false
---

# extend_usages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| usage_type | tinyint *UNSIGNED* | Type of target |  | NO | [Content Type](../numbered-description.md#content-type) |
| usage_id | bigint *UNSIGNED* | Target primary key ID |  | NO |  |
| extend_id | bigint *UNSIGNED* | Extend Content ID |  | NO | Related field `extends->id` |
| can_delete | tinyint *UNSIGNED* | Can be deleted | 1 | NO | 0. No / 1. Yes<br>Editor: User has the right to delete |
| rating | smallint *UNSIGNED* | Display order | 9 | NO | Ascending order |
| app_fskey | varchar(64) | Related plugin |  | NO | Related field `extends->app_fskey` |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
