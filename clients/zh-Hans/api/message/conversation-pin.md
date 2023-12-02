# [对话]置顶对话

- 接口地址：`/fresns-api/v1/conversation/pin`
- 请求方式：`PUT`
- 传参方式：`application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| cvid | String | YES |  |

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
