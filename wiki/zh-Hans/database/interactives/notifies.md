# notifies *通知表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID |  | NO | 自动递赠 |
| user_id | bigint *UNSIGNED* | 用户 ID |  | NO | 关联字段 [users->id](../users/users.md)，这条通知属于谁 |
| type | tinyint *UNSIGNED* | 通知类型 |  | NO | 1.对全员的系统公告 / 2.系统通知 / 3.推荐 / 4.关注 / 5.点赞 / 6.提及（艾特） / 7.评论 |
| content | text | 通知内容 |  | YES | 涉及到帖子或评论时，可存储摘要内容 |
| is_markdown | tinyint *UNSIGNED* | 内容是否为 MD 格式 | 0 | NO | 0.否 / 1.是 |
| plugin_unikey | varchar(64) | 关联插件名称 |  | YES | 关联字段 [plugins->unikey](../plugins/plugins.md)<br>由哪个插件生成的通知消息 |
| is_access_plugin | varchar(64) | 是否访问插件页 | 0 | NO | 将输出 plugin_unikey 的访问地址 |
| action_user_id | bigint *UNSIGNED* | 触发的用户 ID |  | YES | 关联字段 [users->id](../users/users.md) |
| action_type | smallint *UNSIGNED* | 触发行为类型 |  | YES | 1.点赞 2.点踩 3.关注 4.屏蔽 5.发表 6.编辑 7.删除 8.置顶 9.设精 10.管理 |
| action_object | tinyint *UNSIGNED* | 触发目标 |  | YES | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| action_id | bigint *UNSIGNED* | 触发目标 ID |  | YES | 这条通知来源由哪个内容<br>1.关联字段 [users->id](../users/users.md)<br>2.关联字段 groups > id<br>3.关联字段 hashtags > id<br>4.关联字段 posts > id<br>5.关联字段 comments > id |
| is_read | tinyint *UNSIGNED* | 阅读状态 | 0 | NO | 0.未读 / 1.已读 |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## 系统消息解读

- `type=1` 代表系统给全员发了一条 `content` 消息内容（用户不可删除）
    - `user_id` 为 `0`
    - `is_access_plugin` 是否访问插件页
    - `action_object + action_id` 是否有附带内容
- `type=2` 代表系统给你发了一条 `content` 消息内容
    - `is_access_plugin` 是否访问插件页
    - `action_user_id` 是否有触发用户
    - `action_object + action_id` 是否有附带内容

## 推荐消息解读

- `type=3` 代表系统给你推荐了内容
    - `content` 推荐语
    - `is_access_plugin` 是否访问插件页
    - `action_user_id` 是否有触发用户
    - `action_object + action_id` 推荐的内容

## 互动消息解读

- `type=4` 代表 `action_user_id` 关注了你
- `type=5` 代表 `action_user_id` 点赞了你的 `action_object + action_id`
- `type=6` 代表 `action_user_id` 在 `action_object + action_id` 中提及了你
    - `content` 提及内容的摘要
- `type=7` 代表 `action_user_id` 发表 `action_object + action_id` 评论了你
    - `content` 评论内容的摘要
