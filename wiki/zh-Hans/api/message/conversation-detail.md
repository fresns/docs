# [对话]获取对话详情

- 接口地址：`/api/v2/conversation/{conversationId}/detail`
- 请求方式：`GET`
- 传参方式：`Rest`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |

## Rest 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| conversationId | Number | YES | 对话 ID |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "id": "Number / 对话 ID",
        "userIsDeactivate": "Boolean / 用户是否停用",
        "user": {
            // 与我对话的用户信息
            // 通用数据结构->用户信息
        },
        "messageCount": "Number / 全部消息数",
        "unreadCount": "Number / 对话框未读消息数"
    }
}
```
