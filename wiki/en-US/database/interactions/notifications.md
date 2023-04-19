# notifications

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| type | tinyint *UNSIGNED* | 通知类型 |  | NO |  |
| user_id | bigint *UNSIGNED* | 用户 ID |  | NO | Related field [users->id](../users/users.md)，这条通知属于谁 |
| content | text | 通知内容 |  | YES | 涉及到帖子或评论时，可存储摘要内容 |
| is_markdown | tinyint *UNSIGNED* | 内容是否为 MD 格式 | 0 | NO | 0.否 / 1.是 |
| is_multilingual | tinyint *UNSIGNED* | 内容是否为多语言 | 0 | NO | 0.否 / 1.是 |
| is_access_plugin | varchar(64) | 是否访问插件页 | 0 | NO | 将输出 plugin_unikey 的访问地址 |
| plugin_unikey | varchar(64) | Associated Plugin Unikey |  | YES | Related field [plugins->unikey](../plugins/plugins.md)<br>由哪个插件生成的通知消息 |
| action_user_id | bigint *UNSIGNED* | 触发的用户 ID |  | YES | Related field [users->id](../users/users.md) |
| action_type | smallint *UNSIGNED* | 触发行为类型 |  | YES | 1.点赞 2.点踩 3.关注 4.屏蔽 5.发表 6.编辑 7.删除 8.置顶 9.设精 10.管理 |
| action_object | tinyint *UNSIGNED* | 触发目标 |  | YES | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| action_id | bigint *UNSIGNED* | 触发目标 ID |  | YES | 这条通知来源由哪个内容<br>1.Related field [users->id](../users/users.md)<br>2.Related field [groups->id](../contents/groups.md)<br>3.Related field [hashtags->id](../contents/hashtags.md)<br>4.Related field [posts->id](../contents/posts.md)<br>5.Related field [comments->id](../contents/comments.md) |
| action_comment_id | bigint *UNSIGNED* | 评论 ID |  | YES | Related field [comments->id](../contents/comments.md) |
| is_read | tinyint *UNSIGNED* | 阅读状态 | 0 | NO | 0.未读 / 1.已读 |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## 通知类型介绍

- `1` 系统通知
- `2` 推荐内容
- `3` 点赞
- `4` 踩
- `5` 关注
- `6` 屏蔽
- `7` 提及（艾特）
- `8` 评论（回复）

## 系统消息解读

- `type=1` 代表系统给你发了一条 `content` 消息内容
    - `is_access_plugin` 是否访问插件页
    - `action_user_id` 是否有触发用户
    - `action_object + action_id` 是否有触发来源内容

## 推荐消息解读

- `type=2` 代表系统给你推荐了内容
    - `content` 推荐语
    - `is_access_plugin` 是否访问插件页
    - `action_user_id` 是否有触发用户
    - `action_object + action_id` 推荐的内容

## 互动消息解读

- `type=3` 代表 `action_user_id` 点赞了你的 `action_object + action_id`
- `type=4` 代表 `action_user_id` 踩了你的 `action_object + action_id`
- `type=5` 代表 `action_user_id` 关注了你的 `action_object + action_id`
- `type=6` 代表 `action_user_id` 屏蔽了你的 `action_object + action_id`
- `type=7` 代表 `action_user_id` 在 `action_object + action_id` 中提及了你
    - `content` 提及内容的摘要
- `type=8` 代表 `action_user_id` 评论了你的 `action_object + action_id` 内容
    - `content` 评论内容的摘要
    - `action_comment_id` 他的评论 ID
