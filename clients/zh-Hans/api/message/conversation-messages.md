# [对话]获取消息列表

- 接口地址：`/api/fresns/v1/conversation/{cvid}/messages`
- 请求方式：`GET`
- 传参方式：`Rest` + `Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |

## Path 变量

| 变量名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| cvid | String | YES | 对话 ID |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| orderDirection | String | NO | 排序方向，默认 `desc`<br>`asc`,`desc` |
| pageListDirection | String | NO | 每页列表里数组排序方向，默认 `latest`<br>`latest`,`oldest` |
| whitelistUserKeys | String | NO | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组<br>仅对 `user` 参数有效 |
| blacklistUserKeys | String | NO | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组<br>仅对 `user` 参数有效 |
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
                "cmid": "String / 消息 ID",
                "user": {
                    // 发信用户信息，为空表示用户已注销
                    // 通用数据结构->用户信息
                },
                "isMe": "Boolean / 是否为自己发的",
                "type": "Number / 1.文本消息 2.文件消息",
                "content": "String / 消息内容",
                "file": {
                    // 文件消息专用
                    // 通用数据结构->文件信息
                },
                "datetime": "String / 发送时间",
                "datetimeFormat": "String / 格式化的发送时间",
                "timeAgo": "String / 人性化发送时间",
                "readStatus": "Boolean / 阅读状态"
            }
        ]
    }
}
```
