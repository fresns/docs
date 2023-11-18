---
aside: false
---

# file_downloads

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| file_id | bigint *UNSIGNED* | File ID |  | NO | Related field [files->id](files.md) |
| file_type | tinyint *UNSIGNED* | File Type | 1 | NO | 1.Image / 2.Video / 3.Audio / 4.Document |
| account_id | bigint *UNSIGNED* | Downloader Account ID |  | NO | Related field [accounts->id](../accounts/accounts.md) |
| user_id | bigint *UNSIGNED* | Downloader User ID |  | YES | Related field [users->id](../users/users.md) |
| plugin_fskey | varchar(64) | Downloader Plugin |  | YES | Related field [plugins->fskey](../plugins/plugins.md)<br>If downloaded in a plugin, then it is that plugin's fskey |
| object_type | tinyint *UNSIGNED* | Download Source Type | 1 | NO | 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment / 6.Extend Content |
| object_id | bigint *UNSIGNED* | Source Target Primary Key ID |  | NO |  |
| created_at | timestamp | Usage Time | CURRENT_TIMESTAMP | NO | Download Time |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |