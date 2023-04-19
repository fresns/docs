# archive_usages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| usage_type | tinyint *UNSIGNED* | 目标类型 |  | NO |  |
| usage_id | bigint *UNSIGNED* | 目标主键 ID |  | NO |  |
| archive_id | int *UNSIGNED* | 参数 ID |  | NO | Related field `archives->id` |
| archive_value | text | 参数值 | | YES |  |
| is_private | tinyint *UNSIGNED* | 是否保密 | 0 | NO | 0.否 / 1.是 |
| plugin_unikey | varchar(64) | 关联插件 |  | YES | Related field [plugins->unikey](../plugins/plugins.md)<br>哪个插件关联的 |
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
    - `1` Related field [users->id](../users/users.md)
    - `2` Related field [groups->id](../contents/groups.md)
    - `3` Related field [hashtags->id](../contents/hashtags.md)
    - `4` Related field [posts->id](../contents/posts.md)
    - `5` Related field [comments->id](../contents/comments.md)
    - `6` Related field [post_logs->id](../contents/post-logs.md)
    - `7` Related field [comment_logs->id](../contents/comment-logs.md)

## 接口输出示例

```json
{
    "archives": [
        {
            "code": "String / 标识码",
            "name": "String / 名称",
            "description": "String / 描述",
            "value": "String / 参数值",
        }
    ]
}
```