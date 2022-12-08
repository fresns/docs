# plugin_badges

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| plugin_unikey | varchar(64) | 关联插件名称 |  | NO | 关联字段 [plugins->unikey](../plugins/plugins.md) |
| user_id | bigint *UNSIGNED* | 用户 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| display_type | tinyint *UNSIGNED* | 显示类型 |  | NO | 1.红点 / 2.文字 / 3.数字 |
| value_text | varchar(8) | 文本 |  | YES | 纯文字内容 |
| value_number | smallint *UNSIGNED* | 数值 |  | YES | 数字内容 |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
