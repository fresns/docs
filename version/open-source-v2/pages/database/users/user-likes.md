---
aside: false
---

# user_likes

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| user_id | bigint *UNSIGNED* | User Primary Key ID |  | NO | Related field [users->id](users.md) |
| mark_type | tinyint *UNSIGNED* | Operation Type | 1 | NO | 1.Positive (Like) / 2.Negative (Dislike) |
| like_type | tinyint *UNSIGNED* | Type of target | 1 | NO | 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
| like_id | bigint *UNSIGNED* | Target ID |  | NO | 1.Related field `users->id`<br>2.Related field `groups->id`<br>3.Related field `hashtags->id`<br>4.Related field `posts->id`<br>5.Related field `comments->id` |
| created_at | timestamp | Like Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |