---
aside: false
---

# domain_link_usages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID | | NO | Auto-increment |
| usage_type | tinyint *UNSIGNED* | Target Type |  | NO | [Content Type](../numbered-description.md#content-type) |
| usage_id | bigint *UNSIGNED* | Key ID |  | NO |  |
| link_id | int *UNSIGNED* | Link ID |  | NO | Related field `domain_links->id` |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
