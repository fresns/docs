# Account Login

- Endpoint Path: `/api/fresns/v1/account/auth-token`
- Method: `POST`
- Request: `application/json`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | *optional* |
| X-Fresns-Aid-Token | *optional* | *optional* |
| X-Fresns-Uid | *optional* | *optional* |
| X-Fresns-Uid-Token | *optional* | *optional* |

## Body Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| loginToken | String | **required** | Login Token |
| deviceToken | String | *optional* | iOS or Android device Token |

**Request Description**

- See [Login Process](../../reference/login.md)

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "authToken": {
            "aid": "String / Account ID",
            "aidToken": "String / Account Token",
            "uid": "String / User ID",
            "uidToken": "String / User Token",
            "expiredHours": "Number / Expiration hours, null indicates permanent validity",
            "expiredDays": "Number / Expiration days, null indicates permanent validity",
            "expiredDateTime": "String / Token expiration time, null indicates permanent validity, format is Y-m-d H:i:s" // UTC+0
        },
        "items": {
            "walletRecharges": [
                {
                    // Wallet Recharge Extensions
                    // Common Data Structure -> Extend Function Info
                }
            ],
            "walletWithdraws": [
                {
                    // Wallet Withdraw Extensions
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

- [Common Data Structure -> Extends -> Extend Function Info](../../reference/data/extends.md#extend-function-info)
- [Common Data Structure -> Account Info](../../reference/data/account.md)
