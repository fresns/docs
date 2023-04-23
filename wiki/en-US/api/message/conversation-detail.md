# [Conversation] Detail

- Endpoint Path: `/api/v2/conversation/{conversationId}/detail`
- Method: `GET`
- Request: `Rest`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| conversationId | Number | **required** | Conversation ID |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays<br>Valid only for the `user` parameter |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays<br>Valid only for the `user` parameter |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "id": "Number / Conversation ID",
        "user": {
            // 与我对话的用户信息，为空表示用户已注销
            // Common Data Structure -> User Info
        },
        "messageCount": "Number / 全部消息数",
        "unreadCount": "Number / 对话框未读消息数"
    }
}
```
