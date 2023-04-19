# user_likes

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| user_id | bigint *UNSIGNED* | 用户主键 ID |  | NO | Related field [users->id](users.md) |
| mark_type | tinyint *UNSIGNED* | 操作类型 | 1 | NO | 1.正向（赞） / 2.反向（踩） |
| like_type | tinyint *UNSIGNED* | 目标类型 | 1 | NO | 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
| like_id | bigint *UNSIGNED* | 目标 ID |  | NO | 1.Related field users > id<br>2.Related field groups > id<br>3.Related field hashtags > id<br>4.Related field posts > id<br>5.Related field comments > id |
| created_at | timestamp | 点赞时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |