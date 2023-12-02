---
aside: false
---

# Account Info

```json
{
    "aid": "String / Account ID",
    "countryCode": "Number / International Area Code of the Phone",
    "purePhone": "String / Encrypted Phone Number",
    "phone": "String / Encrypted Phone Number with International Area Code",
    "email": "String / Encrypted Email",
    "hasPassword": "Boolean / Account Has Password",
    "verifyStatus": "Boolean / Verified Identity",
    "verifyRealName": "String / Encrypted Real Name",
    "verifyGender": "Number / Gender 1.Unknown 2.Male 3.Female",
    "verifyCertType": "String / Certificate Type: idcard, passport, driving, business",
    "verifyCertNumber": "String / Encrypted Certificate Number",
    "verifyIdentityType": "Number / Verification Type 1.Unknown 2.Individual 3.Enterprise",
    "verifyDateTime": "String / Verification Time",
    "registerDateTime": "String / Account Registration Time",
    "status": "Boolean / Account Status",
    "waitDelete": "Boolean / Pending Deletion",
    "waitDeleteDateTime": "String / Scheduled Deletion Time",
    "connects": [
        {
            "connectPlatformId": "Number / Connected Platform Number",
            "connectName": "String / Connected Platform Name",
            "connected": "Boolean / is connected",
            "service": "String / Connect Service URL",
            "username": "String / Connected Platform Username",
            "nickname": "String / Connected Platform Nickname",
            "avatar": "String / Connected Platform Avatar",
            "status": "Boolean / Connected Platform Validity"
        }
    ],
    "wallet": {
        "status": "Boolean / Wallet Validity",
        "hasPassword": "Boolean / Wallet Has Password",
        "currencyCode": "String / Currency Code, e.g. USD",
        "currencyName": "String / Custom Currency Name",
        "currencyUnit": "String / Custom Currency Unit Name",
        "currencyPrecision": "Number / Currency Precision",
        "balance": "String / Wallet Balance",
        "freezeAmount": "String / Unavailable Amount",
        "bankName": "String / Bank Name",
        "swiftCode": "String / SWIFT Code",
        "bankAddress": "String / Bank Address",
        "bankAccount": "String / Encrypted Bank Account",
        "bankStatus": "Boolean / Bank Verification Status"
    },
    "users": [
        {
            // Common Data Structure -> User Info
        }
    ]
}
```
