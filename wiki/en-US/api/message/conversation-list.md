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
| isPin | Boolean | *optional* | 是否 Pin （留空输出全部） |
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
                "id": "Number / Conversation ID",
                "user": {
                    // 与我对话的用户信息，为空表示用户已注销
                    // Common Data Structure -> User Info
                },
                "latestMessage": {
                    "id": "Number / 最新一条消息 ID",
                    "type": "Number / 1.文本消息 2.文件消息",
                    "message": "String / 最新一条消息内容",
                    "datetime": "String / 最新一条消息的时间",
                    "datetimeFormat": "String / 最新一条消息的时间格式化",
                },
                "isPin": "Boolean / 是否置顶",
                "messageCount": "Number / 全部消息数",
                "unreadCount": "Number / 对话框未读消息数"
            }
        ]
    }
}
```
