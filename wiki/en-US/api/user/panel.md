# User Panel

- Endpoint Path: `/api/v2/user/panel`
- Method: `GET`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| uid | **required** | **required** |
| token | **required** | **required** |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "features": [
            {
                // 用户功能扩展
                // Common Data Structure -> Extend Function Info
            }
        ],
        "profiles": [
            {
                // 用户资料扩展
                // Common Data Structure -> Extend Function Info
            }
        ],
        "dialogUnread": {
            "dialogs": "Number / 未读会话框数量",
            "messages": "Number / 未读会话消息数量"
        },
        "notifyUnread":{
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
        "publish": {
            // 发表帖子权限配置
            "post": {
                "perm": {
                    "draft": "Boolean / 是否可以创建新草稿",
                    "publish": "Boolean / 是否有权限表表",
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
                    "publish": "Boolean / 是否有权限表表",
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
