---
aside: false
---

# operation_usages *扩展资料使用表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| usage_type | tinyint *UNSIGNED* | 目标类型 |  | NO | [内容类型编号](../numbered-description.md#内容类型编号) |
| usage_id | bigint *UNSIGNED* | 目标主键 ID |  | NO |  |
| operation_id | int *UNSIGNED* | 扩展运营 ID |  | NO | 关联字段 operations->id |
| app_fskey | varchar(64) | 关联插件 |  | NO | 关联字段 [apps->fskey](../apps/apps.md)<br>哪个插件关联的 |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
