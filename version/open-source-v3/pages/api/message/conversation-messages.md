# [Conversation] Messages

- Endpoint Path: `/api/v2/conversation/{conversationId}/messages`
- Method: `GET`
- Request: `Rest` + `Query`

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
| orderDirection | String | *optional* | Sort by direction, default `desc`<br>`asc`,`desc` |
| pageListDirection | String | *optional* | Direction of array sorting in each page list, default `latest`<br>`latest`,`oldest` |
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
                "id": "Number / Message ID",
                "user": {
                    // Sender's user information, empty if the user has been deactivated.
                    // Common Data Structure -> User Info
                },
                "isMe": "Boolean / Whether sent by myself",
                "type": "Number / 1. Text message 2. File message",
                "content": "String / Message content",
                "file": {
                    // File message specific
                    // Common Data Structure -> File Info
                },
                "datetime": "String / Sent time",
                "datetimeFormat": "String / Formatted sent time",
                "timeAgo": "String / Humanization time",
                "readStatus": "Boolean / Read status"
            }
        ]
    }
}
```
