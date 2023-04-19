# domain_link_usages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID | | NO | Auto-increment |
| usage_type | tinyint *UNSIGNED* | Target Type |  | NO | 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
| usage_id | bigint *UNSIGNED* | Key ID |  | NO | 1.Related field `users->id`<br>2.Related field `groups->id`<br>3.Related field `hashtags->id`<br>4.Related field `posts->id`<br>5.Related field `comments->id` |
| link_id | int *UNSIGNED* | Link ID |  | NO | Related field `domain_links->id` |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |
