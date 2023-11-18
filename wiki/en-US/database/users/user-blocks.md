---
aside: false
---

# user_blocks

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| user_id | bigint *UNSIGNED* | User Primary Key ID |  | NO | Related field [users->id](users.md) |
| block_type | tinyint *UNSIGNED* | Type of target | 1 | NO | 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
| block_id | bigint *UNSIGNED* | Blocked Target ID |  | NO | 1.Related field `users->id`<br>2.Related field `groups->id`<br>3.Related field `hashtags->id`<br>4.Related field `posts->id`<br>5.Related field `comments->id` |
| user_note | varchar(128) | User Note |  | YES | Note on the followed object by the user |
| created_at | timestamp | Block Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |