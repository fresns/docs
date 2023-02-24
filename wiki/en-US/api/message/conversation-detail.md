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
| whitelistKeys | String | *optional* | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组<br>仅对 `user` 参数有效 |
| blacklistKeys | String | *optional* | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组<br>仅对 `user` 参数有效 |

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
