# Account Register

- Endpoint Path: `/api/v2/account/register`
- Method: `POST`
- Request: `application/json`

## Headers Optional Parameter

| 参数名 | 公开模式（是否必传） | 私有模式：接口不可请求 |
| --- | --- | --- |
| aid | *optional* |  |
| uid | *optional* |  |
| token | *optional* |  |

## Body Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | 账号类型：`email`,`phone` |
| account | String | **required** | 邮箱地址 / 手机号码 |
| countryCode | Number | *optional* | 手机号专用：国际区号 |
| verifyCode | String | **required** | 验证码 |
| password | String | **required** | 登录密码（以 Base64 传参） |
| nickname | String | **required** | 昵称 |
| deviceToken | String | *optional* | iOS 或 Android 设备 Token |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "sessionToken": {
            "token": "String / 账号登录凭证",
            "expiredTime": "String / 凭证有效时间，null 代表永久有效，格式为 Y-m-d H:i:s",
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
