# [Conversation] Messages

- Endpoint Path: `/api/fresns/v1/conversation/{uidOrUsername}/messages`
- Method: `GET`
- Request: `Rest` + `Query`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Path Variables

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| uidOrUsername | Number / String | **required** | User `uid` or `username` |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| orderDirection | String | *optional* | Sort by direction, default `desc`<br>`asc`,`desc` |
| pageListDirection | String | *optional* | Direction of array sorting in each page list, default `latest`<br>`latest`,`oldest` |
| filterUserType | String | *optional* | `whitelist` only returns key-value pairs for the given key names<br>`blacklist` removes specified key-value pairs from the returned data<br>Applies only to the `user` parameter in the returned result |
| filterUserKeys | String | *optional* | Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays |
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
                "cmid": "String / Message ID",
                "user": {
                    // Sender's user information, empty if the user has been deactivated.
                    // Common Data Structure -> User Info
                },
                "isMe": "Boolean / Whether sent by myself",
                "type": "String / text or file",
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

- [Common Data Structure -> User Info](../../reference/data/user.md)
- [Common Data Structure -> File Info](../../reference/data/file.md)
