# [Conversation] Detail

- Endpoint Path: `/api/v2/conversation/{conversationId}/detail`
- Method: `GET`
- Request: `Rest`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| aidToken | **required** | **required** |
| uid | **required** | **required** |
| uidToken | **required** | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| conversationId | Number | **required** | Conversation ID |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "id": "Number / Conversation ID",
        "userIsDeactivate": "Boolean / User is deactivate",
        "user": {
            // 与我对话的用户信息
            // Common Data Structure -> User Info
        },
        "messageCount": "Number / 全部消息数",
        "unreadCount": "Number / 对话框未读消息数"
    }
}
```
