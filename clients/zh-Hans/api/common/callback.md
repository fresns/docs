# 回调返参查询

- 接口地址：`/api/fresns/v1/common/callback`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | YES |
| X-Fresns-Aid-Token | NO | YES |
| X-Fresns-Uid | NO | YES |
| X-Fresns-Uid-Token | NO | YES |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| ulid | String | YES | 回调查询键 |
| fskey | String | NO | 数据使用者 fskey |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // Object or Array / app_callbacks->content
    }
}
```
