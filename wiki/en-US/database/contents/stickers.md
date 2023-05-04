# stickers

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| code | varchar(32) | Sticker code |  | NO | **Unique** Case-insensitive for alphabets and symbols |
| name | varchar(64) | Sticker name |  | NO | **Multilingual** |
| image_file_id | bigint *UNSIGNED* | Sticker image ID |  | YES | Related field [files->id](../systems/files.md) |
| image_file_url | varchar(255) | Sticker image URL |  | YES |  |
| type | tinyint *UNSIGNED* | Is it a sticker group | 1 | NO | 1.Sticker / 2.Sticker group |
| parent_id | int *UNSIGNED* | Parent sticker ID |  | YES |  |
| rating | smallint *UNSIGNED* | Display order | 99 | YES | Ascending order |
| is_enabled | tinyint *UNSIGNED* | Is enabled | 1 | YES | 0.Disabled / 1.Enabled |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | YES |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
