---
aside: false
---

# code_messages *全局状态码信息表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | 主键 ID | | NO | 自动递增 |
| app_fskey | varchar(64) | 关联插件名称 |  | NO | 关联字段 [apps->fskey](../apps/apps.md)<br>Fresns 代表是主程序的状态码 |
| code | int *UNSIGNED* | 状态码 |  | NO |  |
| lang_tag | varchar(16) | 语言标签 |  | NO | 参见「[多语言唯一性逻辑](../../extensions/multilingual.md)」 |
| message | varchar(255) | 状态码信息 |  | NO |  |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
