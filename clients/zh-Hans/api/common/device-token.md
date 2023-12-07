# 更新设备凭证

- 接口地址：`/api/fresns/v1/common/device-token`
- 请求方式：`PUT`
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
| deviceToken | String | YES | iOS 或 Android 设备 Token |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```
