# user_likes

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | 自动递赠 |
| user_id | bigint *UNSIGNED* | 用户主键 ID |  | NO | 关联字段 [users->id](users.md) |
| mark_type | tinyint *UNSIGNED* | 操作类型 | 1 | NO | 1.正向（赞） / 2.反向（踩） |
| like_type | tinyint *UNSIGNED* | 目标类型 | 1 | NO | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| like_id | bigint *UNSIGNED* | 目标 ID |  | NO | 1.关联字段 users > id<br>2.关联字段 groups > id<br>3.关联字段 hashtags > id<br>4.关联字段 posts > id<br>5.关联字段 comments > id |
| created_at | timestamp | 点赞时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |