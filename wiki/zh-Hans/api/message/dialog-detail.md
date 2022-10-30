# [会话]获取会话详情

- 接口地址：`/api/v2/dialog/{dialogId}/detail`
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
| dialogId | Number | YES | 会话 ID |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "user": {
            // 与我会话的用户信息
            // 通用数据结构->用户信息
        }
    }
}
```
