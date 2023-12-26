---
aside: false
---

# domain_links

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| domain_id | int *UNSIGNED* | Domain ID |  | NO | Related field [domains->id](domains.md) |
| link_url | varchar(255) | Full URL Link |  | NO |  |
| link_title | varchar(255) | Link Title |  | YES |  |
| post_count | int *UNSIGNED* | Number of Posts | 0 | NO | Number of posts containing this link |
| comment_count | int *UNSIGNED* | Number of Comments | 0 | NO | Number of comments containing this link |
| is_enabled | tinyint *UNSIGNED* | Is Enabled | 1 | NO | 0.Disabled / 1.Enabled<br>Disabled means the link URL cannot be parsed into a hyperlink and is displayed as plain text only |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |