---
aside: false
---

# seo *搜索引擎优化信息表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID | | NO | 自动递增 |
| usage_type | tinyint *UNSIGNED* | 目标类型 |  | NO | [内容类型编号](../numbered-description.md#内容类型编号) |
| usage_id | bigint *UNSIGNED* | 目标主键 ID |  | NO |  |
| lang_tag | varchar(16) | 语言标签 |  | NO | 参见「[多语言唯一性逻辑](../../extensions/multilingual.md)」 |
| title | varchar(255) | SEO 标题 |  | YES |  |
| keywords | varchar(255) | SEO 关键词 |  | YES |  |
| description | varchar(255) | SEO 描述 |  | YES |  |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
