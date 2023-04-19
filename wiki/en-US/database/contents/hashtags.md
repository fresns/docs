# hashtags

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | 自动递增 |
| name | varchar(64) | 话题名 |  | NO |  |
| slug | varchar(255) | 话题名 URL Encode 转码 |  | NO | **Unique** |
| description | varchar(255) | 描述 |  | YES | **多语言**  |
| cover_file_id | bigint *UNSIGNED* | 封面图 ID |  | YES | Related field [files->id](../systems/files.md) |
| cover_file_url | varchar(255) | 封面图 URL |  | YES |  |
| like_count | int *UNSIGNED* | 点赞数 | 0 | NO | 有多少用户点赞了该话题 |
| dislike_count | int *UNSIGNED* | 点踩数 | 0 | NO | 有多少用户点踩了该话题 |
| follow_count | int *UNSIGNED* | 关注数 | 0 | NO | 有多少用户关注了（收藏）该话题 |
| block_count | int *UNSIGNED* | 屏蔽数 | 0 | NO | 有多少用户屏蔽了（不感兴趣）该话题 |
| post_count | int *UNSIGNED* | 帖子数 | 0 | NO | 有多少帖子关联了该话题 |
| comment_count | int *UNSIGNED* | 评论数 | 0 | NO | 有多少评论关联了该话题 |
| post_digest_count | int *UNSIGNED* | 精华数 | 0 | NO | 插件操作加精，插件加减统计数 |
| comment_digest_count | int *UNSIGNED* | 精华数 | 0 | NO | 插件操作加精，插件加减统计数 |
| is_enable | tinyint *UNSIGNED* | 是否启用 | 1 | NO | 0.不启用 / 1.启用 |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |