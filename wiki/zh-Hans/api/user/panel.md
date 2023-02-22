# 用户面板

- 接口地址：`/api/v2/user/panel`
- 请求方式：`GET`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Uid-Token | YES | YES |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "multiUser": {
            "status": "Boolean / 是否有权使用",
            "service": "String / 服务插件 URL 参数"
        },
        "features": [
            {
                // 用户功能扩展
                // 通用数据结构->扩展功能信息
            }
        ],
        "profiles": [
            {
                // 用户资料扩展
                // 通用数据结构->扩展功能信息
            }
        ],
        "conversations": {
            "conversationCount": "Number / 对话数量",
            "unreadMessages": "Number / 未读对话消息数量"
        },
        "unreadNotifications":{
            "systems": "Number / 未读系统通知",
            "recommends": "Number / 未读推荐",
            "likes": "Number / 未读点赞",
            "dislikes": "Number / 未读点踩",
            "follows": "Number / 未读关注",
            "blocks": "Number / 未读屏蔽",
            "mentions": "Number / 未读提及（艾特）",
            "comments": "Number / 未读评论（回复）"
        },
        "draftCount": {
            "posts": "Number / 帖子草稿数",
            "comments": "Number / 评论草稿数"
        },
        "publishConfig": {
            // 发表帖子权限配置
            "post": {
                "perm": {
                    "draft": "Boolean / 是否可以创建新草稿",
                    "publish": "Boolean / 是否有权限发表",
                    "review": "Boolean / 发表是否需要审核",
                    "emailRequired": "Boolean / 邮箱要求是否通过",
                    "phoneRequired": "Boolean / 手机要求是否通过",
                    "realNameRequired": "Boolean / 实名制要求是否通过",
                    "tips": [
                        "String / 无要求的请求语 1",
                        "String / 无要求的请求语 2"
                    ]
                },
                "limit": {
                    "status": "Boolean / 是否有特殊规则",
                    "type": "Number / 1.指定某个时间段范围内生效 2.指定每天的某个时间段范围内循环生效",
                    "periodStart": "String / type=1 专用，开始日期时间",
                    "periodEnd": "String / type=1 专用，结束日期时间",
                    "cycleStart": "String / type=2 专用，开始时间",
                    "cycleEnd": "String / type=2 专用，结束时间",
                    "rule": "Number / 1.可以发表，但是需要审核 2.禁止发表",
                    "tip": "String / 提示语"
                }
            },
            // 发表评论权限配置
            "comment": {
                "perm": {
                    "draft": "Boolean / 是否可以创建新草稿",
                    "publish": "Boolean / 是否有权限发表",
                    "review": "Boolean / 发表是否需要审核",
                    "emailRequired": "Boolean / 邮箱要求是否通过",
                    "phoneRequired": "Boolean / 手机要求是否通过",
                    "realNameRequired": "Boolean / 实名制要求是否通过",
                    "tips": [
                        "String / 无要求的请求语 1",
                        "String / 无要求的请求语 2"
                    ]
                },
                "limit": {
                    "status": "Boolean / 是否有特殊规则",
                    "type": "Number / 1.指定某个时间段范围内生效 2.指定每天的某个时间段范围内循环生效",
                    "periodStart": "String / type=1 专用，开始日期时间",
                    "periodEnd": "String / type=1 专用，结束日期时间",
                    "cycleStart": "String / type=2 专用，开始时间",
                    "cycleEnd": "String / type=2 专用，结束时间",
                    "rule": "Number / 1.可以发表，但是需要审核 2.禁止发表",
                    "tip": "String / 提示语"
                }
            },
        },
        "fileAccept": {
            "images": "String / 允许上传的图片后缀",
            "videos": "String / 允许上传的视频后缀",
            "audios": "String / 允许上传的音频后缀",
            "documents": "String / 允许上传的文档后缀"
        }
    }
}
```

::: details 开发说明
- features 和 profiles，来自 `plugin_usages` 表。
- 对话消息未读数，查询 `conversations` 和 `conversation_messages` 表内容。
- 通知消息未读数，查询 `notifications` 表内容。
:::