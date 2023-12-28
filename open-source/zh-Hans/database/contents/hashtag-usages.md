---
aside: false
---

# hashtag_usages *话题使用记录表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID | | NO | 自动递增 |
| usage_type | tinyint *UNSIGNED* | 目标类型 |  | NO | [内容类型编号](../numbered-description.md#内容类型编号) |
| usage_id | bigint *UNSIGNED* | 目标主键 ID |  | NO |  |
| hashtag_id | bigint *UNSIGNED* | 话题 ID |  | NO | 关联字段 hashtags->id |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
