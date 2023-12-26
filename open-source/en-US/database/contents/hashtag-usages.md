---
aside: false
---

# hashtag_usages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| usage_type | tinyint *UNSIGNED* | Type of target |  | NO | [Content Type](../numbered-description.md#content-type) |
| usage_id | bigint *UNSIGNED* | Key ID |  | NO |  |
| hashtag_id | bigint *UNSIGNED* | Topic ID |  | NO | Related field hashtags->id |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
