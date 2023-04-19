# account_connects

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| account_id | bigint *UNSIGNED* | Account ID |  | NO | Related field [accounts->id](accounts.md) |
| connect_id | tinyint *UNSIGNED* | Platform Number |  | NO | Related configuration [connects](../../database/dictionary/connects.md) key value |
| connect_token | varchar(128) | Connect Token |  | NO | **Unique**<br>For example: WeChat openid or GitHub Token |
| connect_refresh_token | varchar(128) | Connect Refresh Token |  | YES |  |
| connect_username | varchar(128) | Connect Username |  | YES | Platform username, leave empty if not available |
| connect_nickname | varchar(128) | Connect Nickname |  | NO | Platform nickname, use platform name if not available |
| connect_avatar | varchar(255) | Connect Avatar |  | YES | Platform avatar URL, leave empty if not available |
| plugin_unikey | varchar(64) | Plugin Unikey |  | NO | Related field [plugins->unikey](../plugins/plugins.md)<br>Created by which plugin  |
| is_enable | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid / 1.Valid |
| more_json | json | Backup Field |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
