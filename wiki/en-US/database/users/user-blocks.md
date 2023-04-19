# user_blocks

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| user_id | bigint *UNSIGNED* | 用户主键 ID |  | NO | Related field [users->id](users.md) |
| block_type | tinyint *UNSIGNED* | 目标类型 | 1 | NO | 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
| block_id | bigint *UNSIGNED* | 屏蔽目标 ID |  | NO | 1.Related field users > id<br>2.Related field groups > id<br>3.Related field hashtags > id<br>4.Related field posts > id<br>5.Related field comments > id |
| user_note | varchar(128) | 用户备注 |  | YES | 用户对 follow 的对象进行备注 |
| created_at | timestamp | 屏蔽时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |