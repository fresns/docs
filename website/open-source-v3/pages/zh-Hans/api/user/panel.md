# 用户面板

- 接口地址：`/api/v2/user/panel`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | NO | NO |
| X-Fresns-Uid-Token | NO | NO |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| uidOrUsername | Number / String | NO | 用户 `uid` 或者 `username` |

**接口使用说明**
- 未登录用户也可以请求
- Headers `X-Fresns-Uid` 和 Query `uidOrUsername` 不可以全部为空，二者必传其一
- 如果传参了 `uidOrUsername` 则查询该用户的面板信息，留空则查询 `X-Fresns-Uid` 用户的面板信息
- 查询用户 `uidOrUsername` 必须属于已登录的账号名下，不支持查询其他用户

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
            "all": "Number / 以下所有的未读总数",
            "systems": "Number / 未读系统通知",
            "recommends": "Number / 未读推荐",
            "likes": "Number / 未读点赞",
            "dislikes": "Number / 未读点踩",
            "follows": "Number / 未读关注",
            "blocks": "Number / 未读屏蔽",
            "mentions": "Number / 未读提及（艾特）",
            "comments": "Number / 未读评论（回复）",
            "quotes": "Number / 未读引用（转发）"
        },
        "draftCount": {
            "posts": "Number / 帖子草稿数",
            "comments": "Number / 评论草稿数"
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