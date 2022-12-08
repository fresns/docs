# stickers

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| code | varchar(32) | 表情符号 |  | NO | **唯一值** 不区分中英文或符号 |
| name | varchar(64) | 名称 |  | NO | **多语言** |
| image_file_id | bigint *UNSIGNED* | 表情图 ID |  | YES | 关联字段 [files->id](../systems/files.md) |
| image_file_url | varchar(255) | 表情图 URL |  | YES |  |
| type | tinyint *UNSIGNED* | 是否表情小组 | 1 | NO | 1.表情 / 2.表情小组 |
| parent_id | int *UNSIGNED* | 父级表情 ID |  | YES |  |
| rating | smallint *UNSIGNED* | 排列顺序 | 99 | YES | 升序排序 |
| is_enable | tinyint *UNSIGNED* | 是否启用 | 1 | YES | 0.停用 / 1.启用 |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | YES |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
