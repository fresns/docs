# [Dialog] List

- Endpoint Path: `/api/v2/dialog/list`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| uid | **required** | **required** |
| token | **required** | **required** |

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
                "dialogId": "Number / 对话 ID",
                "dialogUser": {
                    // 与我对话的用户信息
                    // Common Data Structure -> User Info
                },
                "latestMessage": {
                    "messageId": "Number / 最新一条消息 ID",
                    "time": "String / 最新一条消息的时间",
                    "timeFormat": "String / 最新一条消息的时间格式化",
                    "message": "String / 最新一条消息内容",
                },
                "unreadCount": "Number / 对话框未读消息数"
            }
        ]
    }
}
```
