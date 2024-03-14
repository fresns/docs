---
aside: false
---

# comments *评论主表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID | | NO | 自动递增 |
| cid | varchar(32) | 对外公开 ID |  | NO | **唯一值** |
| post_id | bigint *UNSIGNED* | 帖子 ID |  | NO | 关联字段 [posts->id](posts.md) |
| top_parent_id | bigint *UNSIGNED* | 顶级评论 ID | 0 | NO | 所属哪个评论，0 代表不属于任何评论 |
| parent_id | bigint *UNSIGNED* | 父级评论 ID | 0 | NO | 0 代表一级评论 |
| user_id | bigint *UNSIGNED* | 发表者 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| geotag_id | int *UNSIGNED* | 地理 ID | 0 | NO | 关联字段 [geotags->id](geotags.md) |
| content | longtext | 内容 |  | YES |  |
| lang_tag | varchar(16) | 语言标签 |  | YES |  |
| is_markdown | tinyint *UNSIGNED* | 内容是否为 MD 格式 | 0 | NO | 0.否 / 1.是 |
| is_anonymous | tinyint *UNSIGNED* | 是否匿名 | 0 | NO | 0.否 / 1.是 |
| privacy_state | tinyint *UNSIGNED* | 隐私状态 | 1 | NO | `1` 公开<br>`2` 私有<br>`3` 由帖子配置的私有<br>私有则仅评论作者和帖子作者可见 |
| is_sticky | tinyint *UNSIGNED* | 是否置顶 | 0 | NO |  0.否 / 1.是 |
| digest_state | tinyint *UNSIGNED* | 精华状态 | 1 | NO |  1.否 / 2.普级精华 / 3.高级精华 |
| digested_at | timestamp | 精华时间 |  | YES | 设为精华的时间 |
| view_count | int *UNSIGNED* | 查看数 | 0 | NO | 由插件记录 |
| like_count | int *UNSIGNED* | 赞数 | 0 | NO | 有多少用户赞了该条评论 |
| dislike_count | int *UNSIGNED* | 踩数 | 0 | NO | 有多少用户踩了该条评论 |
| follow_count | int *UNSIGNED* | 关注数 | 0 | NO | 有多少用户关注了（收藏）该条评论 |
| block_count | int *UNSIGNED* | 屏蔽数 | 0 | NO | 有多少用户屏蔽了（不感兴趣）该条评论 |
| comment_count | int *UNSIGNED* | 评论数 | 0 | NO | 回复这条评论的数量 |
| comment_digest_count | int *UNSIGNED* | 评论精华总数 | 0 | NO | 回复这条评论的精华总数 |
| comment_like_count | int *UNSIGNED* | 子级评论赞数 | 0 | NO | 回复这条评论的所有评论赞总数 |
| comment_dislike_count | int *UNSIGNED* | 子级评论踩数 | 0 | NO | 回复这条评论的所有评论踩总数 |
| comment_follow_count | int *UNSIGNED* | 子级评论关注数 | 0 | NO | 回复这条评论的所有评论关注总数 |
| comment_block_count | int *UNSIGNED* | 子级评论屏蔽数 | 0 | NO | 回复这条评论的所有评论屏蔽总数 |
| edit_count | smallint *UNSIGNED* | 编辑次数 | 0 | NO | 共编辑了几次 |
| last_edit_at | timestamp | 编辑时间 |  | YES | 如果发表后可以编辑，此处记录编辑时间 |
| last_comment_at | timestamp | 评论时间 |  | YES | 最新一条评论的时间<br>有用户回复了该条评论 |
| more_info | json | 更多信息字段 |  | YES | 比如发布者 IP 位置名、设备名等 |
| permissions | json | 权限参数 |  | YES |  |
| rank_state | tinyint *UNSIGNED* | 等级状态 | 1 | NO | 1.未设置 |
| is_enabled | tinyint *UNSIGNED* | 是否有效 | 1 | NO | 0.无效（仅自己可见） / 1.有效 |
| created_at | timestamp | 发表时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## 权限参数介绍

```json
{
    "editor": {
        "isAppEditor": "Boolean / 是否仅在应用中编辑",
        "editorFskey": "String / 编辑器 fskey"
    },
    "contentWritingDirection": "String / 内容写作方向", // ltr or rtl
    "canDelete": "Boolean / 作者是否有权删除",
    "activeButton": {
        // 与帖子 commentConfig.action 联动，替换该配置
        "hasActiveButton": "Boolean / 是否有 active 按钮",
        "buttonName": {
            "语言标签": "String / 按钮名称",
            "en": "Name"
        },
        "buttonStyle": "String / 按钮风格 primary secondary success danger warning info",
        "appFskey": "String / 配置应用 fskey"
    },
}
```
