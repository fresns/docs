# code_messages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID | | NO | 自动递增 |
| plugin_unikey | varchar(64) | 关联插件名称 |  | NO | 关联字段 [plugins->unikey](../plugins/plugins.md)<br>Fresns 代表是主程序的状态码 |
| code | int *UNSIGNED* | 状态码 |  | NO |  |
| lang_tag | char(16) | Language Tag |  | NO | 参见「[多语言唯一性逻辑](../../extensions/multilingual.md)」 |
| message | varchar(255) | 状态码信息 |  | NO |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
