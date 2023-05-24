# stickers *表情表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| code | varchar(32) | 表情符号 |  | NO | **唯一值** 不区分中英文或符号 |
| name | varchar(64) | 名称 |  | NO | **多语言** |
| image_file_id | bigint *UNSIGNED* | 表情图 ID |  | YES | 关联字段 [files->id](../systems/files.md) |
| image_file_url | varchar(255) | 表情图 URL |  | YES |  |
| type | tinyint *UNSIGNED* | 是否表情小组 | 1 | NO | 1.表情 / 2.表情小组 |
| parent_id | int *UNSIGNED* | 父级表情 ID |  | YES |  |
| rating | smallint *UNSIGNED* | 排列顺序 | 99 | YES | 升序排序 |
| is_enabled | tinyint *UNSIGNED* | 是否启用 | 1 | YES | 0.停用 / 1.启用 |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | YES |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
