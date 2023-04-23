# Account Login

- Endpoint Path: `/api/v2/account/login`
- Method: `POST`
- Request: `application/json`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | *optional* |
| X-Fresns-Aid-Token | *optional* | *optional* |
| X-Fresns-Uid | *optional* | *optional* |
| X-Fresns-Uid-Token | *optional* | *optional* |

## Body Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | Account type: `email`, `phone` |
| account | String | **required** | Email address / Phone number |
| countryCode | Number | *optional* | Phone number specific: International area code |
| password | String | *optional* | Password login specific (Base64 encoded) |
| verifyCode | String | *optional* | Verification code login specific |
| deviceToken | String | *optional* | iOS or Android device Token |

**Request Description**

- Either `password` or `verifyCode` should be provided

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "sessionToken": {
            "token": "String / Account login token",
            "expiredHours": "Number / Expiration hours, null indicates permanent validity",
            "expiredDays": "Number / Expiration days, null indicates permanent validity",
            "expiredDateTime": "String / Token expiration time, null indicates permanent validity, format is Y-m-d H:i:s"
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
