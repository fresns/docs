---
aside: false
---

# archive_usages *扩展参数使用表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| usage_type | tinyint *UNSIGNED* | 目标类型 |  | NO |  |
| usage_id | bigint *UNSIGNED* | 目标主键 ID |  | NO |  |
| archive_id | int *UNSIGNED* | 参数 ID |  | NO | 关联字段 archives->id |
| archive_value | text | 参数值 | | YES |  |
| is_private | tinyint *UNSIGNED* | 是否保密 | 0 | NO | 0.否 / 1.是 |
| plugin_fskey | varchar(64) | 关联插件 |  | YES | 关联字段 [plugins->fskey](../plugins/plugins.md)<br>哪个插件关联的 |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

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