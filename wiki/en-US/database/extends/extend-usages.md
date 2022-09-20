# extend_usages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | 自动递增 |
| usage_type | tinyint *UNSIGNED* | 目标类型 |  | NO |  |
| usage_id | bigint *UNSIGNED* | 目标主键 ID |  | NO |  |
| extend_id | bigint *UNSIGNED* | 扩展内容 ID |  | NO | 关联字段 extends > id |
| can_delete | tinyint *UNSIGNED* | 是否有权删除 | 1 | NO | 0.否 / 1.是<br>编辑器：用户是否有权删除 |
| rating | smallint *UNSIGNED* | 排列顺序 | 9 | NO | 升序排序 |
| plugin_unikey | varchar(64) | 关联插件 |  | NO | 关联字段 extends > plugin_unikey |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## 使用目标关联介绍

- `usage_type` 目标类型
    - `1` 用户
    - `2` 小组
    - `3` 话题
    - `4` 帖子
    - `5` 评论
    - `6` 帖子日志
    - `7` 评论日志
- `usage_id` 目标主键 ID
    - `1` 关联字段 [users->id](../users/users.md)
    - `2` 关联字段 [groups->id](../contents/groups.md)
    - `3` 关联字段 [hashtags->id](../contents/hashtags.md)
    - `4` 关联字段 [posts->id](../contents/posts.md)
    - `5` 关联字段 [comments->id](../contents/comments.md)
    - `6` 关联字段 [post_logs->id](../contents/post-logs.md)
    - `7` 关联字段 [comment_logs->id](../contents/comment-logs.md)
