# user_follows *用户关注表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| user_id | bigint *UNSIGNED* | 用户主键 ID |  | NO | 关联字段 [users->id](users.md) |
| follow_type | tinyint *UNSIGNED* | 目标类型 | 1 | NO | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| follow_id | bigint *UNSIGNED* | 关注目标 ID |  | NO | 1.关联字段 users->id<br>2.关联字段 groups->id<br>3.关联字段 hashtags->id<br>4.关联字段 posts->id<br>5.关联字段 comments->id |
| user_note | varchar(128) | 用户备注 |  | YES | 用户对 follow 的对象进行备注 |
| is_mutual | tinyint *UNSIGNED* | 用户专用：是否互相关注 | 0 | NO | 0.否 / 1.是 |
| is_enabled | tinyint *UNSIGNED* | 是否有效 | 1 | NO | 0.无效 / 1.有效 |
| expired_at | timestamp | 小组专用：失效时间 |  | YES |  |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |