# account_connects

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| account_id | bigint *UNSIGNED* | Account ID |  | NO | 关联字段 [accounts->id](accounts.md) |
| connect_id | tinyint *UNSIGNED* | 互联平台编号 |  | NO | 关联配置表 [connects](../../database/dictionary/connects.md) 键值 |
| connect_token | varchar(128) | 关联凭证 Token |  | NO | **Unique**<br>例如：微信 openid 或 GitHub Token |
| connect_refresh_token | varchar(128) | 关联凭证 Refresh Token |  | YES |  |
| connect_username | varchar(128) | 关联用户名 |  | YES | 互联平台的用户名，没有则留空 |
| connect_nickname | varchar(128) | 关联昵称 |  | NO | 互联平台的昵称，没有则填写平台的名称 |
| connect_avatar | varchar(255) | 关联头像 |  | YES | 互联平台的头像 URL，没有则留空 |
| plugin_unikey | varchar(64) | 插件名 |  | NO | 关联字段 [plugins->unikey](../plugins/plugins.md)<br>是由哪个插件创建的  |
| is_enable | tinyint *UNSIGNED* | 是否有效 | 1 | NO | 0.无效 / 1.有效 |
| more_json | json | 备用字段 |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
