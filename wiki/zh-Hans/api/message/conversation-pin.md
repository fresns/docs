# [对话]置顶对话

- 接口地址：`/api/v2/conversation/pin`
- 请求方式：`PUT`
- 传参方式：`application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | YES | YES |
| aidToken | YES | YES |
| uid | YES | YES |
| aidToken | YES | YES |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| conversationId | Number | YES |  |

**接口使用说明**

- 未置顶则置顶，已置顶则取消置顶

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
