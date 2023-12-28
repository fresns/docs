---
aside: false
---

# language_packs *语言包表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| lang_key | varchar(64) | 键名 | | NO | **唯一值** |
| lang_values | json | 语言内容 |  | NO | **多语言** |
| is_custom | tinyint *UNSIGNED* | 是否为自定义 | 1 | NO | 0.否 / 1.是<br>0 表示为系统自带，1 表示为应用新增 |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
