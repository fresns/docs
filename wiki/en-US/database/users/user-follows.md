# user_follows

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| user_id | bigint *UNSIGNED* | User Primary Key ID |  | NO | Related field [users->id](users.md) |
| follow_type | tinyint *UNSIGNED* | Type of target | 1 | NO | 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
| follow_id | bigint *UNSIGNED* | Follow Target ID |  | NO | 1.Related field `users->id`<br>2.Related field `groups->id`<br>3.Related field `hashtags->id`<br>4.Related field `posts->id`<br>5.Related field `comments->id` |
| user_note | varchar(128) | User Note |  | YES | Note on the followed object by the user |
| is_mutual | tinyint *UNSIGNED* | User-specific: Mutual Follow | 0 | NO | 0.No / 1.Yes |
| is_enable | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid / 1.Valid |
| expired_at | timestamp | Group-specific: Expiration Time |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |