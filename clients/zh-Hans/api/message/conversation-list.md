# [对话]获取对话列表

- 接口地址：`/api/fresns/v1/conversation/list`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| pinned | Boolean | NO | 是否 Pin （留空输出全部） |
| filterUserType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `user` 参数有效 |
| filterUserKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |
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
                "user": {
                    // 与我对话的用户信息，为空表示用户已注销
                    // 通用数据结构->用户信息
                },
                "latestMessage": {
                    "cmid": "String / 最新一条消息 ID",
                    "type": "String / text 或 file",
                    "message": "String / 最新一条消息内容",
                    "datetime": "String / 最新一条消息的时间",
                    "datetimeFormat": "String / 最新一条消息的时间格式化",
                    "timeAgo": "String / 最新一条消息的人性化时间",
                },
                "pinned": "Boolean / 是否置顶",
                "messageCount": "Number / 全部消息数",
                "unreadCount": "Number / 对话框未读消息数"
            }
        ]
    }
}
```

- [通用数据结构->用户信息](../../reference/data/user.md)
