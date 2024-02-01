---
aside: false
---

# geotag_usages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| usage_type | tinyint *UNSIGNED* | Type of target |  | NO | [Content Type](../numbered-description.md#content-type) |
| usage_id | bigint *UNSIGNED* | Key ID |  | NO |  |
| geotag_id | int *UNSIGNED* | Geotag ID |  | NO | Related field `geotags->id` |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
