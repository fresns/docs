# [Conversation] Detail

- Endpoint Path: `/api/v2/conversation/{uidOrUsername}/detail`
- Method: `GET`
- Request: `Rest`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| uid | **required** | **required** |
| token | **required** | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| uidOrUsername | String | **required** | 用户 `uid` 或者 `username` |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "id": "Number / 对话 ID",
        "user": {
            // 与我对话的用户信息
            // Common Data Structure -> User Info
        },
        "unreadCount": "Number / 对话框未读消息数"
    }
}
```
