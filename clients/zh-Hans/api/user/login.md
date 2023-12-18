# 用户登录

- 接口地址：`/api/fresns/v1/user/auth-token`
- 请求方式：`POST`
- 传参方式：`application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | NO | NO |
| X-Fresns-Uid-Token | NO | NO |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| uidOrUsername | Number / String | YES | 用户 `uid` 或者 `username` |
| pin | String | NO | Personal Identification Number |
| deviceToken | String | NO | iOS 或 Android 设备 Token |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "authToken": {
            "uid": "String / 用户 UID",
            "token": "String / 用户登录凭证",
            "expiredHours": "Number / 有效期小时数，null 代表永久有效",
            "expiredDays": "Number / 有效期天数，null 代表永久有效",
            "expiredDateTime": "String / 凭证有效时间，null 代表永久有效，格式为 Y-m-d H:i:s"
        },
        "detail": {
            // 通用数据结构->用户信息
        }
    }
}
```

- [通用数据结构->用户信息](../../reference/data/user.md)
