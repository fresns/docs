---
aside: false
---

# archive_usages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| usage_type | tinyint *UNSIGNED* | Type of target |  | NO | [Content Type](../numbered-description.md#content-type) |
| usage_id | bigint *UNSIGNED* | Target primary key ID |  | NO |  |
| archive_id | int *UNSIGNED* | Parameter ID |  | NO | Related field `archives->id` |
| archive_value | text | Parameter value | | YES |  |
| is_private | tinyint *UNSIGNED* | Is private | 0 | NO | 0.No / 1.Yes |
| app_fskey | varchar(64) | Related plugin |  | YES | Related field [apps->fskey](../apps/apps.md)<br>Which plugin is associated with |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## API output example

```json
{
    "archives": [
        {
            "code": "String / Code",
            "name": "String / Name",
            "description": "String / Description",
            "value": "String / Parameter value",
        }
    ]
}
```