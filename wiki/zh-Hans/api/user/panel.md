# 用户面板

- 接口地址：`/api/v2/user/panel`
- 请求方式：`GET`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | YES | YES |
| uid | YES | YES |
| token | YES | YES |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
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
        "dialogUnread": {
            "dialog": "Number / 未读会话框数量",
            "message": "Number / 未读会话消息数量"
        },
        "notifyUnread":{
            "bulletin": "Number / 未读对全员的系统公告",
            "system": "Number / 未读系统通知",
            "recommend": "Number / 未读推荐",
            "follow": "Number / 未读关注",
            "like": "Number / 未读点赞",
            "mention": "Number / 未读提及（艾特）",
            "comment": "Number / 未读评论"
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

::: details 开发说明
- features 和 profiles，来自 `plugin_usages` 表。
- 会话消息未读数，查询 `dialogs` 和 `dialog_messages` 表内容。
- 通知消息未读数，查询 `notifies` 表内容。
:::