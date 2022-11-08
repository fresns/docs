# [对话]获取消息列表

- 接口地址：`/api/v2/dialog/{dialogId}/messages`
- 请求方式：`GET`
- 传参方式：`Rest` + `Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | YES | YES |
| uid | YES | YES |
| token | YES | YES |

## Rest 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| dialogId | Number | YES | 对话 ID |

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
                "messageId": "Number / 消息 ID",
                "sendUser": {
                    // 发信用户信息
                    // 通用数据结构->用户信息
                },
                "sendUserIsMe": "Boolean / 是否为自己发的",
                "sendTime": "String / 发送时间",
                "sendTimeFormat": "String / 格式化的发送时间",
                "type": "Number / 1.文本消息 2.文件消息",
                "content": "String / 消息内容",
                "file": {
                    // 文件消息专用
                    // 通用数据结构->文件信息
                },
                "readStatus": "Boolean / 阅读状态"
            }
        ]
    }
}
```
