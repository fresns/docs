---
aside: false
---

# citys *城市字典*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | 主键 ID | | NO | 自动递增 |
| type | smallint *UNSIGNED* | 类型 | 1 | NO | 用于自定义用途，比如分类或过滤 |
| cover_file_id | bigint *UNSIGNED* | 封面图 ID |  | YES | 关联字段 [files->id](../systems/files.md) |
| cover_file_url | varchar(255) | 封面图 URL |  | YES |  |
| parent_id | int *UNSIGNED* | 父级城市 ID |  | YES |  |
| continent_code | varchar(8) | 洲代码 |  | YES | 亚洲 `AS` |
| country_code | varchar(8) | 国家代码 |  | YES | 中国 `CN` |
| region_code | varchar(8) | 省或州代码 |  | YES | 江苏 `JS` |
| city_code | varchar(8) | 城市代码 |  | YES | 苏州 `SZ` |
| zip | varchar(32) | 行政区划代码 |  | YES | 215000 |
| continent | json | 洲名 |  | YES | **多语言** |
| country | json | 国家名 |  | YES | **多语言** |
| region | json | 省或州名 |  | YES | **多语言** |
| city | json | 城市名 |  | YES | **多语言** |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
