# Account Login

- Endpoint Path: `/api/v2/account/login`
- Method: `POST`
- Request: `application/json`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | *optional* | *optional* |
| aidToken | *optional* | *optional* |
| uid | *optional* | *optional* |
| uidToken | *optional* | *optional* |

## Body Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | 账号类型：`email`,`phone` |
| account | String | **required** | 邮箱地址 / 手机号码 |
| countryCode | Number | *optional* | 手机号专用：国际区号 |
| password | String | *optional* | 密码登录专用（以 Base64 传参） |
| verifyCode | String | *optional* | 验证码登录专用 |
| deviceToken | String | *optional* | iOS 或 Android 设备 Token |

**Request Description**

- `password` 和 `verifyCode` 二选一传参

## Return

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
                    // Common Data Structure -> Extend Function Info
                }
            ],
            "walletWithdraws": [
                {
                    // 钱包充值扩展
                    // Common Data Structure -> Extend Function Info
                }
            ],
        },
        "detail": {
            // Common Data Structure -> Account Info
        }
    }
}
```
