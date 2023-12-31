---
aside: false
---

# stickers

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| code | varchar(32) | Sticker code |  | NO | **Unique** Case-insensitive for alphabets and symbols |
| name | json | Sticker name |  | YES | **Multilingual** |
| image_file_id | bigint *UNSIGNED* | Sticker image ID |  | YES | Related field [files->id](../systems/files.md) |
| image_file_url | varchar(255) | Sticker image URL |  | YES |  |
| type | tinyint *UNSIGNED* | Is it a sticker group | 1 | NO | 1.Sticker / 2.Sticker group |
| parent_id | int *UNSIGNED* | Parent sticker ID |  | YES |  |
| sort_order | smallint *UNSIGNED* | Display order | 99 | YES | Ascending order |
| is_enabled | tinyint *UNSIGNED* | Is enabled | 1 | YES | 0.Disabled / 1.Enabled |
| created_at | timestamp | Create Time | useCurrent | YES | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
