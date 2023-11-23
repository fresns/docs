---
aside: false
---

# session_tokens

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| platform_id | tinyint *UNSIGNED* | Platform ID |  | NO | Foreign key [configs->item_key = platforms](../dictionary/platforms.md) |
| version | varchar(16) | Version |  | NO | Semantic versioning |
| app_id | char(8) | App ID |  | YES | [session_keys->app_id](session-keys.md) |
| account_id | bigint *UNSIGNED* | Account ID |  | NO | Related field [accounts->id](../accounts/accounts.md) |
| account_token | char(32) | Account token |  | NO |  |
| user_id | bigint *UNSIGNED* | User ID |  | YES | Related field [users->id](../users/users.md) |
| user_token | char(32) | User token |  | YES |  |
| scope | varchar(128) | Scope |  | YES |  |
| payload | text | Payload |  | YES |  |
| device_token | varchar(128) | Device Token |  | YES | For example, iOS Device Token or Android Device Token<br>Can be used for push notifications |
| expired_at | timestamp | Expiration Time |  | YES | Empty means valid indefinitely |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
