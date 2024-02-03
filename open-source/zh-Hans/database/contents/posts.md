---
aside: false
---

# posts *帖子主表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 帖子 ID | | NO | 自动递增 |
| pid | varchar(32) | 对外公开 ID |  | NO | **唯一值** |
| user_id | bigint *UNSIGNED* | 发布者 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| quoted_post_id | bigint *UNSIGNED* | 引用的帖子 ID | 0 | NO | 0 代表无 |
| group_id | int *UNSIGNED* | 小组 ID | 0 | NO | 关联字段 [groups->id](groups.md) |
| geotag_id | int *UNSIGNED* | 地理 ID | 0 | NO | 关联字段 [geotags->id](geotags.md) |
| title | varchar(255) | 标题 |  | YES |  |
| content | longtext | 内容 |  | YES |  |
| lang_tag | varchar(16) | 语言标签 |  | YES |  |
| is_markdown | tinyint *UNSIGNED* | 内容是否为 MD 格式 | 0 | NO | 0.否 / 1.是 |
| is_anonymous | tinyint *UNSIGNED* | 是否匿名 | 0 | NO | 0.否 / 1.是 |
| map_location | point<br>geography | 地图-经纬度 |  | YES | `longitude`, `latitude`<br>`SRID 4326` |
| sticky_state | tinyint *UNSIGNED* | 置顶状态 | 1 | NO | 1.否 / 2.小组页置顶 / 3.全局置顶 |
| digest_state | tinyint *UNSIGNED* | 精华状态 | 1 | NO | 1.否 / 2.普通精华 / 3.高级精华 |
| digested_at | timestamp | 精华时间 |  | YES | 设为精华的时间 |
| view_count | int *UNSIGNED* | 查看数 | 0 | NO | 由插件记录 |
| like_count | int *UNSIGNED* | 赞数 | 0 | NO | 有多少用户赞了该帖子 |
| dislike_count | int *UNSIGNED* | 踩数 | 0 | NO | 有多少用户踩了该帖子 |
| follow_count | int *UNSIGNED* | 关注数 | 0 | NO | 有多少用户关注了（收藏）该帖子 |
| block_count | int *UNSIGNED* | 屏蔽数 | 0 | NO | 有多少用户屏蔽了（不感兴趣）该帖子 |
| comment_count | int *UNSIGNED* | 评论数 | 0 | NO | 该帖子有多少条评论，包括评论二级回复 |
| comment_digest_count | int *UNSIGNED* | 评论精华总数 | 0 | NO | 该帖子评论的精华总数 |
| comment_like_count | int *UNSIGNED* | 评论赞数 | 0 | NO | 所有评论被赞总数 |
| comment_dislike_count | int *UNSIGNED* | 评论踩数 | 0 | NO | 所有评论被踩总数 |
| comment_follow_count | int *UNSIGNED* | 评论关注数 | 0 | NO | 所有评论被关注总数 |
| comment_block_count | int *UNSIGNED* | 评论屏蔽数 | 0 | NO | 所有评论被屏蔽总数 |
| quote_count | int *UNSIGNED* | 帖子引用数 | 0 | NO | 引用它的帖子总数 |
| edit_count | smallint *UNSIGNED* | 编辑次数 | 0 | NO | 共编辑了几次 |
| last_edit_at | timestamp | 编辑时间 |  | YES | 如果发表后可以编辑，此处记录编辑时间 |
| last_comment_at | timestamp | 评论时间 |  | YES | 最新一条评论的时间 |
| more_info | json | 更多信息字段 |  | YES |  |
| permissions | json | 权限参数 |  | YES |  |
| rank_state | tinyint *UNSIGNED* | 等级状态 | 1 | NO | 1.未设置 |
| is_enabled | tinyint *UNSIGNED* | 是否有效 | 1 | NO | 0.无效（仅自己可见） / 1.有效 |
| created_at | timestamp | 发表时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## 精华说明

**普通精华**
- 常规曝光
- 出现在关注了该小组的用户时间线里

*开启关注“小组”功能后，关注页信息流默认只展示“小组”下设为精华的内容*

**高级精华**
- 常规曝光
- 出现在所有用户时间线里

## 权限参数介绍

```json
{
    "editor": {
        "isAppEditor": "Boolean / 是否仅在应用中编辑",
        "editorFskey": "String / 编辑器 fskey"
    },
    "contentWritingDirection": "String / 内容写作方向", // ltr or rtl
    "canDelete": "Boolean / 作者是否有权删除",
    "readConfig": {
        "isReadLocked": "Boolean / 是否需要阅读授权",
        "previewPercentage": "Number / 无权时内容显示比例",
        "whitelist": {
            "users": "Array / 白名单用户 ID",
            "roles": "Array / 白名单角色 ID"
        },
        "buttonName": {
            "语言标签": "String / 无权时按钮文字",
            "en": "Name"
        },
        "appFskey": "String / 授权应用 fskey"
    },
    "associatedUserListConfig": {
        "hasUserList": "Boolean / 是否有关联用户列表",
        "userListName": {
            "语言标签": "String / 用户列表名称",
            "en": "Name"
        },
        "appFskey": "String / 用户列表应用 fskey"
    },
    "commentConfig": {
        "visible": "Boolean / 评论是否可见（不可见对所有人隐藏，包括作者）",
        "enabled": "Boolean / 评论功能是否启用",
        "privacy": "String / public (公开) 或 private（私有则仅评论作者和帖子作者可见）",
        "action": {
            "hasActionButton": "Boolean / 评论是否有按钮",
            "buttonName": {
                "语言标签": "String / 按钮名称",
                "en": "Name"
            },
            "buttonStyle": "String / 按钮风格 primary secondary success danger warning info",
            "appFskey": "String / 配置应用 fskey"
        }
    },
}
```
