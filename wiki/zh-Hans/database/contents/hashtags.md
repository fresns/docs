---
aside: false
---

# hashtags *话题表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID | | NO | 自动递增 |
| name | varchar(64) | 话题名 |  | NO |  |
| slug | varchar(255) | 话题名 URL Encode 转码 |  | NO | **唯一值** |
| type | smallint *UNSIGNED* | 类型 |  | NO | 用于自定义用途，比如分类或过滤 |
| description | text | 描述 |  | YES | **多语言**  |
| cover_file_id | bigint *UNSIGNED* | 封面图 ID |  | YES | 关联字段 [files->id](../systems/files.md) |
| cover_file_url | varchar(255) | 封面图 URL |  | YES |  |
| like_count | int *UNSIGNED* | 点赞数 | 0 | NO | 有多少用户点赞了该话题 |
| dislike_count | int *UNSIGNED* | 点踩数 | 0 | NO | 有多少用户点踩了该话题 |
| follow_count | int *UNSIGNED* | 关注数 | 0 | NO | 有多少用户关注了（收藏）该话题 |
| block_count | int *UNSIGNED* | 屏蔽数 | 0 | NO | 有多少用户屏蔽了（不感兴趣）该话题 |
| post_count | int *UNSIGNED* | 帖子数 | 0 | NO | 有多少帖子关联了该话题 |
| comment_count | int *UNSIGNED* | 评论数 | 0 | NO | 有多少评论关联了该话题 |
| post_digest_count | int *UNSIGNED* | 精华数 | 0 | NO | 插件操作加精，插件加减统计数 |
| comment_digest_count | int *UNSIGNED* | 精华数 | 0 | NO | 插件操作加精，插件加减统计数 |
| is_enabled | tinyint *UNSIGNED* | 是否启用 | 1 | NO | 0.不启用 / 1.启用 |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |