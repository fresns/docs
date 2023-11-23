# Account Detail

- Endpoint Path: `/api/v2/account/detail`
- Method: `GET`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | *optional* | *optional* |
| X-Fresns-Uid-Token | *optional* | *optional* |

**Request Description**

- This interface will not output the token parameter, which will only be created and output by registered and logged-in interfaces.

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
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
