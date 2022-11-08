# [对话]获取对话列表

- 接口地址：`/api/v2/dialog/list`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | YES | YES |
| uid | YES | YES |
| token | YES | YES |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| pageSize | Number | NO | 每页显示条数（默认 15 条） |
| page | Number | NO | 页码（默认 1） |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "pagination": {
            "total": "Number / 一共有多少条数据",
            "pageSize": "Number / 每页有多少条数据",
            "currentPage": "Number / 当前页码",
            "lastPage": "Number / 最后一页页码"
        },
        "list": [
            {
                "dialogId": "Number / 对话 ID",
                "dialogUser": {
                    // 与我对话的用户信息
                    // 通用数据结构->用户信息
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
