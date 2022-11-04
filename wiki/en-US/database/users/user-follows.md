# user_follows

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | 自动递赠 |
| user_id | bigint *UNSIGNED* | 用户主键 ID |  | NO | 关联字段 [users->id](users.md) |
| follow_type | tinyint *UNSIGNED* | 目标类型 | 1 | NO | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| follow_id | bigint *UNSIGNED* | 关注目标 ID |  | NO | 1.关联字段 users > id<br>2.关联字段 groups > id<br>3.关联字段 hashtags > id<br>4.关联字段 posts > id<br>5.关联字段 comments > id |
| user_note | varchar(128) | 用户备注 |  | YES | 用户对 follow 的对象进行备注 |
| is_mutual | tinyint *UNSIGNED* | 用户专用：是否互相关注 | 0 | NO | 0.否 / 1.是 |
| expired_at | timestamp | 小组专用：失效时间 |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |