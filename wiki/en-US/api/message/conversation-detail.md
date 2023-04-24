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
            // User information for the conversation with me, empty if the user has been deactivated.
            // Common Data Structure -> User Info
        },
        "messageCount": "Number / Total message count",
        "unreadCount": "Number / Unread message count in the conversation"
    }
}
```
