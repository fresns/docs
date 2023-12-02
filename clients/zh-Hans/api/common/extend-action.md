# 扩展交互请求

- 接口地址：`/fresns-api/v1/common/extend-action`
- 请求方式：`POST`
- 传参方式：`application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Uid-Token | YES | YES |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| eid | String | YES | 扩展内容 ID |
| key | String | YES | actions->items->key |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // 通用数据结构->扩展->扩展内容信息->actions
    }
}
```

- [通用数据结构->扩展->扩展内容信息->actions](../../reference/data/extends.md#扩展内容信息)
