---
aside: false
---

# session_keys

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| platform_id | tinyint *UNSIGNED* | Platform ID |  | NO | [platforms](../../configs/dictionary/platforms.md) |
| name | varchar(64) | Usage Name |  | NO |  |
| type | tinyint *UNSIGNED* | Key Permission Type |  | NO | 1. Main Program API / 2. Admin API / 3. Plugin API |
| app_fskey | varchar(64) | Related Plugin |  | YES | Plugin API exclusive, Related field [apps->fskey](../apps/apps.md) |
| app_id | char(8) | App ID |  | NO | Auto-generated |
| app_key | char(32) | Client Key |  | NO | Auto-generated |
| is_read_only | tinyint *UNSIGNED* | Is read-only | 0 | NO | 0.No / 1.Yes |
| is_enabled | tinyint *UNSIGNED* | Is Enabled | 1 | NO | 0. Disabled / 1. Enabled |
| remark | text | Remark |  | YES |  |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## Key Permission Description

- Main program API key can request all interfaces, including plugin APIs
- Plugin API key can only request its own plugin API
