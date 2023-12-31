---
aside: false
---

# extend_usages *扩展内容使用表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID | | NO | 自动递增 |
| usage_type | tinyint *UNSIGNED* | 目标类型 |  | NO | [内容类型编号](../numbered-description.md#内容类型编号) |
| usage_id | bigint *UNSIGNED* | 目标主键 ID |  | NO |  |
| extend_id | bigint *UNSIGNED* | 扩展内容 ID |  | NO | 关联字段 extends->id |
| can_delete | tinyint *UNSIGNED* | 是否有权删除 | 1 | NO | 0.否 / 1.是<br>编辑器：用户是否有权删除 |
| sort_order | smallint *UNSIGNED* | 排列顺序 | 9 | NO | 升序排序 |
| app_fskey | varchar(64) | 关联插件 |  | NO | 关联字段 extends->app_fskey |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
