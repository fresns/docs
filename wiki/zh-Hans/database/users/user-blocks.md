# user_blocks *用户屏蔽表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| user_id | bigint *UNSIGNED* | 用户主键 ID |  | NO | 关联字段 [users->id](users.md) |
| block_type | tinyint *UNSIGNED* | 目标类型 | 1 | NO | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| block_id | bigint *UNSIGNED* | 屏蔽目标 ID |  | NO | 1.关联字段 users->id<br>2.关联字段 groups->id<br>3.关联字段 hashtags->id<br>4.关联字段 posts->id<br>5.关联字段 comments->id |
| user_note | varchar(128) | 用户备注 |  | YES | 用户对 follow 的对象进行备注 |
| created_at | timestamp | 屏蔽时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |