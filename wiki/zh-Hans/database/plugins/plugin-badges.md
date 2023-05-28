# plugin_badges *插件徽标数据表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| plugin_fskey | varchar(64) | 关联插件名称 |  | NO | 关联字段 [plugins->fskey](../plugins/plugins.md) |
| user_id | bigint *UNSIGNED* | 用户 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| display_type | tinyint *UNSIGNED* | 显示类型 |  | NO | 1.红点 / 2.数字 / 3.文字 |
| value_number | smallint *UNSIGNED* | 数值 |  | YES | 数字内容 |
| value_text | varchar(8) | 文本 |  | YES | 纯文字内容 |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
