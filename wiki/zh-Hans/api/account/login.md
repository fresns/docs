# 登录

- 接口地址：`/api/v2/account/login`
- 请求方式：`POST`
- 传参方式：`application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | NO |
| X-Fresns-Aid-Token | NO | NO |
| X-Fresns-Uid | NO | NO |
| X-Fresns-Uid-Token | NO | NO |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | 账号类型：`email`,`phone` |
| account | String | YES | 邮箱地址 / 手机号码 |
| countryCode | Number | NO | 手机号专用：国际区号 |
| password | String | NO | 密码登录专用（以 Base64 传参） |
| verifyCode | String | NO | 验证码登录专用 |
| deviceToken | String | NO | iOS 或 Android 设备 Token |

**接口使用说明**

- `password` 和 `verifyCode` 二选一传参

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "sessionToken": {
            "token": "String / 账号登录凭证",
            "expiredHours": "Number / 有效期小时数，null 代表永久有效",
            "expiredDays": "Number / 有效期天数，null 代表永久有效",
            "expiredDateTime": "String / 凭证有效时间，null 代表永久有效，格式为 Y-m-d H:i:s"
        },
        "items": {
            "walletRecharges": [
                {
                    // 钱包充值扩展
                    // 通用数据结构->扩展功能信息
                }
            ],
            "walletWithdraws": [
                {
                    // 钱包充值扩展
                    // 通用数据结构->扩展功能信息
                }
            ],
        },
        "detail": {
            // 通用数据结构->账号信息
        }
    }
}
```

::: details 开发说明
- `email` 邮箱登录：可以 `password` 密码登录或者 `verifyCode` 验证码登录。
- `phone` 手机号登录：可以 `password` 密码登录或者 `verifyCode` 验证码登录。
- 查询该用户近 1 小时内登录密码错误次数，达到 5 次，则限制登录。
- 验参格式正确后，使用命令字 `verifyAccount` 执行登录。
:::