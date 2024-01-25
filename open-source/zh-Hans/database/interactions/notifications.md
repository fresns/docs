---
aside: false
---

# notifications *通知表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| nmid | varchar(32) | 对外公开 ID |  | NO | **唯一值** |
| type | tinyint *UNSIGNED* | 通知类型 |  | NO |  |
| user_id | bigint *UNSIGNED* | 用户 ID |  | NO | 关联字段 [users->id](../users/users.md)，这条通知属于谁 |
| content | json | 通知内容 |  | YES | **多语言**<br>涉及到帖子或评论时，可存储摘要内容 |
| is_markdown | tinyint *UNSIGNED* | 内容是否为 MD 格式 | 0 | NO | 0.否 / 1.是 |
| is_mention | tinyint *UNSIGNED* | 是否为提及通知 | 0 | NO | 0.否 / 1.是<br>别人内容里提及了我，然后互动通知的我 |
| is_access_app | varchar(64) | 是否访问应用页 | 0 | NO | 将输出 app_fskey 的访问地址 |
| app_fskey | varchar(64) | 关联应用 |  | YES | 关联字段 [apps->fskey](../apps/apps.md)<br>由哪个插件生成的通知消息 |
| action_user_id | bigint *UNSIGNED* | 触发的用户 ID |  | YES | 关联字段 [users->id](../users/users.md) |
| action_is_anonymous | tinyint *UNSIGNED* | 是否匿名触发 | 0 | NO | 0.否 / 1.是 |
| action_type | smallint *UNSIGNED* | 触发行为类型 |  | YES | 1.赞 2.踩 3.关注 4.屏蔽 5.发表 6.编辑 7.删除 8.置顶 9.设精 10.管理 |
| action_object | tinyint *UNSIGNED* | 触发目标 |  | YES | [内容类型编号](../numbered-description.md#内容类型编号) |
| action_id | bigint *UNSIGNED* | 触发目标 ID |  | YES | 这条通知来源由哪个内容 |
| action_content_id | bigint *UNSIGNED* | 帖子或评论 ID |  | YES | 关联字段 [posts->id](../contents/posts.md) 或者 [comments->id](../contents/comments.md) |
| is_read | tinyint *UNSIGNED* | 阅读状态 | 0 | NO | 0.未读 / 1.已读 |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## 通知类型介绍

- `1` 系统通知
- `2` 推荐内容
- `3` 赞
- `4` 踩
- `5` 关注
- `6` 屏蔽
- `7` 提及（艾特）
- `8` 评论（回复）
- `9` 引用（转发）

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

- `type=3` 代表 `action_user_id` 赞了你的 `action_object + action_id`
- `type=4` 代表 `action_user_id` 踩了你的 `action_object + action_id`
- `type=5` 代表 `action_user_id` 关注了你的 `action_object + action_id`
- `type=6` 代表 `action_user_id` 屏蔽了你的 `action_object + action_id`
- `type=7` 代表 `action_user_id` 在 `action_object + action_id` 中提及了你
    - `content` 提及内容的摘要
- `type=8` 代表 `action_user_id` 评论了你的 `action_object + action_id` 内容
    - `content` 评论内容的摘要
    - `action_content_id` 他的评论 ID
- `type=9` 代表 `action_user_id` 引用了你的 `action_object=4 + action_id` 帖子
    - `content` 他的内容摘要
    - `action_post_id` 他的帖子 ID
