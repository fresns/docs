---
aside: false
---

# app_callbacks

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| app_fskey | varchar(64) | Generate data for plugin fskey |  | NO | Related field [apps->fskey](../apps/apps.md) |
| account_id | bigint *UNSIGNED* | Account that generated the data |  | YES | Related field [accounts->id](../accounts/accounts.md) |
| user_id | bigint *UNSIGNED* | User that generated the data |  | YES | Related field [users->id](../users/users.md) |
| ulid | ulid | Callback query key |  | NO | **Unique value**<br>Universally Unique Lexicographically Sortable Identifier<br>Example: 01GQBMS8BBTCKTT7B0T3EER8XR |
| type | smallint *UNSIGNED* | Type | 1 | NO | See description below |
| content | json | Return parameter content |  | YES |  |
| is_used | tinyint *UNSIGNED* | Status | 0 | NO | 0. Not called<br>1. Called (used) |
| used_app_fskey | varchar(64) | Data use plugin fskey |  | YES | Related field [apps->fskey](../apps/apps.md) |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## type

| Number | Const Name | Description |
| --- | --- | --- |
| 1 | TYPE_CUSTOMIZE | Customize |
| 2 | TYPE_RELOAD | Reload / Refresh page |
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
