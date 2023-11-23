---
aside: false
---

# mentions

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| user_id | bigint *UNSIGNED* | Initiator user ID |  | NO | Related field [users->id](../users/users.md) |
| mention_type | tinyint *UNSIGNED* | Related target type | 1 | NO | 1.User `users->bio`<br>2.Group `groups->description`<br>3.Hashtag `hashtags->description`<br>4.Post `posts->content`<br>5.Comment `comments->content` |
| mention_id | bigint *UNSIGNED* | Related target primary key ID |  | NO | 1.Related field `users->id`<br>2.Related field `groups->id`<br>3.Related field `hashtags->id`<br>4.Related field `posts->id`<br>5.Related field `comments->id` |
| mention_user_id | bigint *UNSIGNED* | Mentioned user ID |  | NO | Related field [users->id](../users/users.md) |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |