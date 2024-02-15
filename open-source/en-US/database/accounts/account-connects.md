---
aside: false
---

# account_connects

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| account_id | bigint *UNSIGNED* | Account ID |  | NO | Related field [accounts->id](accounts.md) |
| connect_platform_id | tinyint *UNSIGNED* | Platform Number |  | NO | Related configuration [connects](../../configs/dictionary/connects.md) key value |
| connect_account_id | varchar(128) | Connect Token |  | NO | **Unique**<br>For example: WeChat openid or GitHub ID |
| connect_token | varchar(128) | Auth Token |  | YES |  |
| connect_refresh_token | varchar(128) | Auth Refresh Token |  | YES |  |
| refresh_token_expired_at | timestamp | Auth Refresh Token Expired Time |  | YES | connect_refresh_token |
| connect_username | varchar(128) | Connect Username |  | YES | Platform username, leave empty if not available |
| connect_nickname | varchar(128) | Connect Nickname |  | YES | Platform nickname, use platform name if not available |
| connect_avatar | varchar(255) | Connect Avatar |  | YES | Platform avatar URL, leave empty if not available |
| app_fskey | varchar(64) | Plugin Fskey |  | NO | Related field [apps->fskey](../apps/apps.md)<br>Created by which plugin  |
| is_enabled | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid / 1.Valid |
| more_info | json | Backup Field |  | YES |  |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
