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
        }
    }
}
```

::: details 开发说明
- features 和 profiles，来自 `plugin_usages` 表。
- 会话消息未读数，查询 `dialogs` 和 `dialog_messages` 表内容。
- 通知消息未读数，查询 `notifies` 表内容。
:::