# Account Detail

- Endpoint Path: `/api/v2/account/detail`
- Method: `GET`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| aidToken | **required** | **required** |
| uid | *optional* | *optional* |
| uidToken | *optional* | *optional* |

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
