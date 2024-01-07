---
aside: false
---

# account_connects *账号互联凭证表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| account_id | bigint *UNSIGNED* | 账号主键 ID |  | NO | 关联字段 [accounts->id](accounts.md) |
| connect_platform_id | tinyint *UNSIGNED* | 互联平台编号 |  | NO | 关联配置表 [connects](../../database/dictionary/connects.md) 键值 |
| connect_account_id | varchar(128) | 关联账号 ID |  | NO | **唯一值**<br>例如：微信 openid 或 GitHub ID |
| connect_token | varchar(128) | 授权 Token |  | YES |  |
| connect_refresh_token | varchar(128) | 授权 Refresh Token |  | YES |  |
| refresh_token_expired_at | timestamp | 授权 Refresh Token 有效期 |  | YES | connect_refresh_token |
| connect_username | varchar(128) | 关联用户名 |  | YES | 互联平台的用户名，没有则留空 |
| connect_nickname | varchar(128) | 关联昵称 |  | YES | 互联平台的昵称，没有则填写平台的名称 |
| connect_avatar | varchar(255) | 关联头像 |  | YES | 互联平台的头像 URL，没有则留空 |
| app_fskey | varchar(64) | 插件名 |  | NO | 关联字段 [apps->fskey](../apps/apps.md)<br>是由哪个插件创建的  |
| is_enabled | tinyint *UNSIGNED* | 是否有效 | 1 | NO | 0.无效 / 1.有效 |
| more_info | json | 备用字段 |  | YES |  |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
