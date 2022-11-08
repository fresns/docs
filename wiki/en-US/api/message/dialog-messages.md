# [Conversation] Messages

- Endpoint Path: `/api/v2/conversation/{uidOrUsername}/messages`
- Method: `GET`
- Request: `Rest` + `Query`

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

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
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
                "messageId": "Number / 消息 ID",
                "sendUser": {
                    // 发信用户信息
                    // Common Data Structure -> User Info
                },
                "sendUserIsMe": "Boolean / 是否为自己发的",
                "sendTime": "String / 发送时间",
                "sendTimeFormat": "String / 格式化的发送时间",
                "type": "Number / 1.文本消息 2.文件消息",
                "content": "String / 消息内容",
                "file": {
                    // 文件消息专用
                    // Common Data Structure -> File Info
                },
                "readStatus": "Boolean / 阅读状态"
            }
        ]
    }
}
```
