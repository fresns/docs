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
| orderDirection | String | *optional* | 排序方向，默认 `desc`<br>`asc`,`desc` |
| pageListDirection | String | *optional* | 每页列表里数组排序方向，默认 `latest`<br>`latest`,`oldest` |
| whitelistKeys | String | *optional* | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组<br>仅对 `user` 参数有效 |
| blacklistKeys | String | *optional* | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组<br>仅对 `user` 参数有效 |
| pageSize | Number | *optional* | 每页显示条数（默认 15 条） |
| page | Number | *optional* | 页码（默认 1） |

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
                    // 发信用户信息，为空表示用户已注销
                    // Common Data Structure -> User Info
                },
                "isMe": "Boolean / 是否为自己发的",
                "type": "Number / 1.文本消息 2.文件消息",
                "content": "String / 消息内容",
                "file": {
                    // 文件消息专用
                    // Common Data Structure -> File Info
                },
                "datetime": "String / 发送时间",
                "datetimeFormat": "String / 格式化的发送时间",
                "readStatus": "Boolean / 阅读状态"
            }
        ]
    }
}
```
