---
aside: false
---

# session_tokens *交互凭证表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| platform_id | tinyint *UNSIGNED* | 平台编号 |  | NO | [platforms](../../configs/dictionary/platforms.md) |
| version | varchar(16) | 版本号 |  | NO | 语义化版本号 |
| app_id | char(8) | App ID |  | YES | [session_keys->app_id](session-keys.md) |
| account_id | bigint *UNSIGNED* | 账号 ID |  | NO | 关联字段 [accounts->id](../accounts/accounts.md) |
| account_token | char(32) | 账号凭证 |  | NO |  |
| user_id | bigint *UNSIGNED* | 用户 ID |  | YES | 关联字段 [users->id](../users/users.md) |
| user_token | char(32) | 用户凭证 |  | YES |  |
| scope | varchar(128) | 作用域 |  | YES |  |
| payload | text | 负载 |  | YES |  |
| device_token | varchar(128) | 设备 Token |  | YES | 例如 iOS Device Token 或 Android Device Token<br>可应用于推送消息 |
| expired_at | timestamp | 过期时间 |  | YES | 留空代表永久有效 |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |
