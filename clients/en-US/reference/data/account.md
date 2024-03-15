---
aside: false
---

# Account Info

```json
{
    "aid": "String / Account ID",
    "hasPhone": "Boolean / Has Phone",
    "hasEmail": "Boolean / Has Email",
    "hasPassword": "Boolean / Has Password",
    "birthday": "String / Birthday",
    "kycVerified": "Boolean / KYC Verified",
    "status": "Boolean / Account Status",
    "waitDelete": "Boolean / Pending Deletion",
    "waitDeleteDateTime": "String / Scheduled Deletion Time",
    "wallet": {
        "status": "Boolean / Wallet Validity",
        "hasPassword": "Boolean / Wallet Has Password",
        "currencyCode": "String / Currency Code, e.g. USD",
        "currencyName": "String / Custom Currency Name",
        "currencyUnit": "String / Custom Currency Unit Name",
        "currencyPrecision": "Number / Currency Precision",
        "balance": "String / Wallet Balance",
        "freezeAmount": "String / Unavailable Amount"
    },
    "users": [
        {
            // Common Data Structure -> User Info
        }
    ]
}
```
