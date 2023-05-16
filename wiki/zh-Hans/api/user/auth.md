# 用户登录

- 接口地址：`/api/v2/user/auth`
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
| uidOrUsername | String | YES | 用户 `uid` 或者 `username` |
| password | String | NO | 密码（以 Base64 传参） |
| deviceToken | String | NO | iOS 或 Android 设备 Token |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "sessionToken": {
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

::: details 开发说明
- 验证 `uidOrUsername` 是否属于 `header->aid`
- 查询该用户近 1 小时内登录密码错误次数，达到 5 次，则限制登录。
- 数据表密码字段为空，代表无密码，不输入密码可直接登录。
:::