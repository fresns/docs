# 账号登录

- 接口地址：`/api/fresns/v1/account/auth-token`
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
| loginToken | String | YES | 登录令牌 |
| deviceToken | String | NO | iOS 或 Android 设备 Token |

**接口使用说明**

- 参见[登录流程](../../reference/headers.md#登录流程)

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "authToken": {
            "aid": "String / 账号 ID",
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
                    // 钱包提现扩展
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

- [通用数据结构->扩展->扩展功能信息](../../reference/data/extends.md#扩展功能信息)
- [通用数据结构->账号信息](../../reference/data/account.md)
