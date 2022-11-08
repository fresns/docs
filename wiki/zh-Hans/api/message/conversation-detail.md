# [对话]获取对话详情

- 接口地址：`/api/v2/conversation/{uidOrUsername}/detail`
- 请求方式：`GET`
- 传参方式：`Rest`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | YES | YES |
| uid | YES | YES |
| token | YES | YES |

## Rest 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| uidOrUsername | String | YES | 用户 `uid` 或者 `username` |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "id": "Number / 对话 ID",
        "user": {
            // 与我对话的用户信息
            // 通用数据结构->用户信息
        },
        "unreadCount": "Number / 对话框未读消息数"
    }
}
```
