# 扩展频道

- 接口地址：`/api/fresns/v1/global/channels`
- 请求方式：`GET`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | YES |
| X-Fresns-Aid-Token | NO | YES |
| X-Fresns-Uid | NO | YES |
| X-Fresns-Uid-Token | NO | YES |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        // 通用数据结构->扩展->扩展功能信息
    ]
}
```

- [通用数据结构->扩展->扩展功能信息](../../reference/data/extends.md#扩展功能信息)
