# [Conversation] List

- Endpoint Path: `/api/v2/conversation/list`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| pinned | Boolean | *optional* | Pin or not (leave empty to output all) |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays<br>Valid only for the `user` parameter |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays<br>Valid only for the `user` parameter |
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "pagination": {
            "total": "Number / How much data in total",
            "pageSize": "Number / How much data on each page",
            "currentPage": "Number / Current page number",
            "lastPage": "Number / Last page number"
        },
        "list": [
            {
                "id": "Number / Conversation ID",
                "user": {
                    // User information for the conversation with me, empty if the user has been deactivated.
                    // Common Data Structure -> User Info
                },
                "latestMessage": {
                    "id": "Number / Latest message ID",
                    "type": "Number / 1. Text message 2. File message",
                    "message": "String / Latest message content",
                    "datetime": "String / Time of the latest message",
                    "datetimeFormat": "String / Formatted time of the latest message",
                    "timeAgo": "String / Humanization time",
                },
                "pinned": "Boolean / Whether pinned",
                "messageCount": "Number / Total message count",
                "unreadCount": "Number / Unread message count in the conversation"
            }
        ]
    }
}
```
