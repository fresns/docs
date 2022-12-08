# [对话]获取对话列表

- 接口地址：`/api/v2/conversation/list`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | YES | YES |
| aidToken | YES | YES |
| uid | YES | YES |
| aidToken | YES | YES |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| isPin | Boolean | NO | 是否 Pin （留空输出全部） |
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
                "id": "Number / 对话 ID",
                "userIsDeactivate": "Boolean / 用户是否停用",
                "user": {
                    // 与我对话的用户信息
                    // 通用数据结构->用户信息
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
