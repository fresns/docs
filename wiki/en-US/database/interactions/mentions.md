# mentions

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| user_id | bigint *UNSIGNED* | 发起艾特者 ID |  | NO | Related field [users->id](../users/users.md) |
| mention_type | tinyint *UNSIGNED* | 关联目标类型 | 1 | NO | 1.User `users->bio`<br>2.Group `groups->description`<br>3.Hashtag `hashtags->description`<br>4.Post `posts->content`<br>5.Comment `comments->content` |
| mention_id | bigint *UNSIGNED* | 关联目标主键 ID |  | NO | 1.Related field `users->id`<br>2.Related field `groups->id`<br>3.Related field `hashtags->id`<br>4.Related field `posts->id`<br>5.Related field `comments->id` |
| mention_user_id | bigint *UNSIGNED* | 被艾特用户 ID |  | NO | Related field [users->id](../users/users.md) |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |