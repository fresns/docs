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
