---
aside: false
---

# mentions *艾特记录表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID | | NO | 自动递增 |
| user_id | bigint *UNSIGNED* | 发起艾特者 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| mention_type | tinyint *UNSIGNED* | 关联目标类型 | 1 | NO | 1.用户 `users->bio`<br>2.小组 `groups->description`<br>3.话题 `hashtags->description`<br>4.帖子 `posts->content`<br>5.评论 `comments->content` |
| mention_id | bigint *UNSIGNED* | 关联目标主键 ID |  | NO | 1.关联字段 `users->id`<br>2.关联字段 `groups->id`<br>3.关联字段 `hashtags->id`<br>4.关联字段 `posts->id`<br>5.关联字段 `comments->id` |
| mention_user_id | bigint *UNSIGNED* | 被艾特用户 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |