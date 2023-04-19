# domain_links

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID | | NO | 自动递增 |
| domain_id | int *UNSIGNED* | Domain ID |  | NO | Related field [domains->id](domains.md) |
| link_url | varchar(255) | 完整 URL 链接 |  | NO |  |
| link_title | varchar(255) | 链接标题 |  | YES |  |
| post_count | int *UNSIGNED* | 帖子数 | 0 | NO | 有多少帖子内容包含了该链接 |
| comment_count | int *UNSIGNED* | 评论数 | 0 | NO | 有多少评论内容包含了该链接 |
| is_enable | tinyint *UNSIGNED* | 是否启用 | 1 | NO | 0.禁用 / 1.启用<br>禁用则该链接 URL 不能解析成超链接，仅作为纯文本显示 |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |