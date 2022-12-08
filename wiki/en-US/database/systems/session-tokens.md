# session_tokens

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| platform_id | tinyint *UNSIGNED* | 平台编号 |  | NO | 关联键名 [configs->item_key = platforms](../dictionary/platforms.md) |
| version | varchar(16) | 版本号 |  | NO | 语义化版本号 |
| app_id | char(8) | App ID |  | YES | [session_keys->app_id](session-keys.md) |
| account_id | bigint *UNSIGNED* | Account ID |  | NO | 关联字段 [accounts->id](../accounts/accounts.md) |
| account_token | char(32) | Account token |  | NO |  |
| user_id | bigint *UNSIGNED* | User ID |  | YES | 关联字段 [users->id](../users/users.md) |
| user_token | char(32) | User token |  | YES |  |
| scope | varchar(128) | 作用域 |  | YES |  |
| payload | text | 负载 |  | YES |  |
| expired_at | timestamp | 过期时间 |  | YES | 留空代表永久有效 |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
