---
aside: false
---

# temp_callback_contents

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| app_fskey | varchar(64) | Generate data for plugin fskey |  | NO | Related field [apps->fskey](../apps/apps.md) |
| ulid | ulid | Callback query key |  | NO | **Unique value**<br>Universally Unique Lexicographically Sortable Identifier<br>Example: 01GQBMS8BBTCKTT7B0T3EER8XR |
| type | smallint *UNSIGNED* | Type | 1 | NO | See description below |
| content | json | Return parameter content |  | YES |  |
| retention_days | tinyint *UNSIGNED* | Retention Days | 1 | NO | Data can be retained for a number of days, after which it can be deleted. |
| is_enabled | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid / 1.Valid |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## type

| Number | Const Name | Description |
| --- | --- | --- |
| 1 | TYPE_UNKNOWN | Unknown |
| 2 | TYPE_AUTHORIZATION | Authorization |
| 3 | TYPE_TOKEN | Token |
| 4 | TYPE_ACCOUNT | Account |
| 5 | TYPE_USER | User |
| 6 | TYPE_GROUP | Group |
| 7 | TYPE_HASHTAG | Hashtag |
| 8 | TYPE_GEOTAG | Geotag |
| 9 | TYPE_POST | Post |
| 10 | TYPE_COMMENT | Comment |
| 11 | TYPE_ARCHIVE | Extended profile information |
| 12 | TYPE_EXTEND | Extended content information |
| 13 | TYPE_OPERATION | Extended function information |
| 14 | TYPE_FILE | File |
| 15 | TYPE_LOCATION_INFO | Location Info |
