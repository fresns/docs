# Account Register

- Endpoint Path: `/api/v2/account/register`
- Method: `POST`
- Request: `application/json`

## Headers Optional Parameter

| Parameter Name | Public Mode | Private Mode (API not available) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* |  |
| X-Fresns-Aid-Token | *optional* |  |
| X-Fresns-Uid | *optional* |  |
| X-Fresns-Uid-Token | *optional* |  |

## Body Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | Account type: `email`, `phone` |
| account | String | **required** | Email address / Phone number |
| countryCode | Number | *optional* | Phone number specific: International area code |
| verifyCode | String | **required** | Verification code |
| password | String | **required** | Login password (Base64 encoded) |
| nickname | String | **required** | Nickname |
| deviceToken | String | *optional* | iOS or Android device Token |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "sessionToken": {
            "aid": "String / Account ID",
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
