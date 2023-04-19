# user_follows

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| user_id | bigint *UNSIGNED* | 用户主键 ID |  | NO | Related field [users->id](users.md) |
| follow_type | tinyint *UNSIGNED* | 目标类型 | 1 | NO | 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
| follow_id | bigint *UNSIGNED* | 关注目标 ID |  | NO | 1.Related field `users->id`<br>2.Related field `groups->id`<br>3.Related field `hashtags->id`<br>4.Related field `posts->id`<br>5.Related field `comments->id` |
| user_note | varchar(128) | 用户备注 |  | YES | 用户对 follow 的对象进行备注 |
| is_mutual | tinyint *UNSIGNED* | 用户专用：是否互相关注 | 0 | NO | 0.否 / 1.是 |
| is_enable | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid / 1.Valid |
| expired_at | timestamp | 小组专用：失效时间 |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |